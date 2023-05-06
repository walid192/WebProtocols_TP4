import { context } from "../context/context";

export const Subscription = {
    CVUpdates: {
        subscribe: ({pubSub}:typeof context) => pubSub.asyncIterator("CVUpdates"),
        resolve: (payload: any) => { return payload; },
    }
}
