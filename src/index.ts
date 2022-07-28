//! This contract implements simple counter backed by storage on blockchain.
//!
//! The contract provides methods to [increment] / [decrement] counter and
//! get it's current value [get_num] or [reset].
import { NearContract, NearBindgen, near, call, view } from 'near-sdk-js'
import { STORAGE_COST } from './model'

@NearBindgen
class Counter extends NearContract {
    val: number;
    
    constructor() {
        super()
        this.val = 0
    }

    @call
    // Smart contract function: Increment the counter.
    increment() {
        this.val += 1;
        near.log(`Increased number to ${this.val}`)
    }

    @call
    // Smart contract function: Decrement the counter.
    decrement() {
        this.val -= 1;
        near.log(`Decreased number to ${this.val}`)
    }

    @call
    // Smart contract function: Reset to zero.
    reset() {
        this.val = 0;
        near.log(`Reset counter to zero`)
    }

    @view
    // Smart contract function: Returns the counter value.
    get_num() {
        near.log(`hello workd`)
        near.log(`hello workd: ${STORAGE_COST.toString()}`)
        return this.val
    }
}

