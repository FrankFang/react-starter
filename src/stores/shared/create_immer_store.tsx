import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Fn<S> = StateCreator<S, [['zustand/immer', never]], []>
export function createImmerStore<S = unknown>(fn: Fn<S>) {
  return create<S>()(immer(fn))
}
