// Author: Ebbie Aden
// License: MIT

module MusicStreaming {
    use aptos::account::{Account, Address};
    use aptos::coin::{Coin, CoinType};
    use aptos::event::{Event, EventHandle};
    use aptos::move_core_types::resource:Resource;
    use aptos::stdlib::vector;
    use aptos::stdlib::string;

    // User information resource
    resource User {
        address: Address,
        role: UserRole,
        points: u64, // streaming points
        tokens: u64, // converted tokens
    }

    // user roles
    enum UserRole {
        Creator,
        Basic,
    }

    // Respurce to store music metadata
    resource Music {
        id: u64,
        title: vector<u8>,
        artist: vector<u8>,
        streams: u64,// stores number of streams
        royalties: u64,
    }

    event RegisterUser {
        address: Address,
        role: UserRole,
    }

    event uploadMusic {
        id: u64,
        title: vector<u8>,
        artist: vector<u8>,
    }

    event StreamMusic {
        id: u64,
        address: Address,
    }

    event DistributeRoyalties {
        address: Address,
        amount: u64,
    }

    // module to manage user registration
    module UserManagement {
        public fun init() {
            let register_user_event_handle = EventHandle::create<RegisterUser>();
        }

        // register a new user
        public fun register_user(address: &signer, role: UserRole) {
            let user = User { address, role, points: 0, tokens: 0}
            Account::create_resource(address, user); // saving user resource to the blockchain
            Event::emit<RegisterUser>(register_user_event_handle, address, role);
        }
    }

    //module to manage music streaming
    module MusicStreaming {
        public fun init() {
            let stream_music_event_handle = EventHandle::create<StreamMusic>();
        }

        // Stream music
        public fun stream_music(address: &signer, music_id: u64) {
            //fetch music resource
            let music = Account::get_resource<Music>(address, music_id);
            music.streams += 1;

            // save the updated music resource
            Account::set_resource(address, music);
            
            //emit a music streaming event
            Event::emit<StreamMusic>(stream_music_event_handle, music_id, address);

            // Reward points to the creator
            let creator = Account::get_resource<User>(address, music.artist);
            creator.points += 1;
            Account:;set_resource(address, creator);
        }
    }

    module PointsConversion {
        // Convert points to tokens
        public fun convert_points(address: &signer, points: u64) {
            let user = Account::get_resource<User>(address);
            assert(user.points >= points, "Insufficient points");
            let aptos_price = get_aptos_price();
            let token_amount = calculate_token_amount(points, aptos_price);
            user.tokens += token_amount; // updates the user's token
            Account::set_resource(address, user);
        }

        private fun get_aptos_price() -> u64 {
            // retrieving aptos current price from chainlink
            let oracle_contract = 0x...;
            let aptos_price = ChainlinkOracle::get_price(oracle_contract, "APTOS");
            return aptos_price;
        }

        private fun calculate_token_amount(points: u64) -> u64 {
            // Get the current conversion rate from a external data source (e.g. an oracle)
            let conversion_rate = get_conversion_rate();
            // Calculate the token amount
            let token_amount = points * conversion_rate;
            // Apply a sliding scale to the token amount based on the user's points balance
            if (user.points > 1000) {
                token_amount *= 1.1;
            } else if (user.points > 500) {
                token_amount *= 1.05;
            } else {
                token_amount *= 1.0;
            }
            return token_amount;
        }

        // Calculate the token amount based on the current price
        private fun calculate_token_amount(points: u64, aptos_price: u64) -> u64 {
            let token_amount = points * aptos_price;
            return token_amount;
        }
    }

    // Module to manage royalty distribution
    module RoyaltyDistribution {
        public fun init() {
            let distribute_royalties_event_handle = EventHandle::create<DistributeRoyalties>();
        }

        public fun distribute_royalties(address: &signer, amount: u64) {
            // fetch the resource
            let user = Account::get_resource<User>(address);
            // verify if user is a creator
            assert(user.role == UserRole::Creator, "Only creator can receive royalties");
            user.tokens += amount;
            Account::set_resource(address, creator);
        }
    }
}