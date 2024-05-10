module Subscription::subscripttion_contract {
    use 0x1::coin;
    use 0x1::Clock;
    use 0x1::Event;

    const ERR_NOT_SUBSCRIBED: u64 = 1;
    const ERR_SUBSCRIPTION_EXPIRED: u64 = 2;
    const ERR_PAYMENT_REQUIRED: u64 = 3;

    public struct User {
        option<address> subscription: u64;
    }

    public struct Subscription {
        address user: address;
        u64 start: u64;
        u64 end: u64;
        bool active: bool;
    }

    public struct SubscriptionCreated {
        user: address;
        subscription: address;
    }

    public struct SubscriptionRenewed {
        user: address;
        subscription: address;
    }

    public fun createSubscription(user: &signer, amount: u64): public(Subscription) {
        let now = Clock::get().now_seconds();
        let end = now + 30 * 24 * 60 * 60; // 30 days from now
        let subscription = Subscription {
            user: user.address(),
            start: now,
            end: end,
            active: true,
        };
        coin::transfer(user, amount);
        Event::emit(SubscriptionCreated { user: user.address(), subscription: user.address() });
        return subscription;
    }

    public fun paySubscription(user: &signer, subscription: &Subscription, amount: u64): public() {
        coin::transfer(user, amount);
        subscription.active = true;
        Event::emit(SubscriptionRenewed { user: user.address(), subscription: user.address() });
    }

    public fun checkSubscriptionStatus(user: &signer, subscription: &Subscription): public(bool) {
        if (!subscription.active) {
            return false;
        }
        let now = Clock::get().now_seconds();
        if (now > subscription.end) {
            return false;
        }
        return true;
    }
}