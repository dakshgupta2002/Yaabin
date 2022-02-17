import { writable } from 'svelte/store'
import supabase from './supabase'

/** @type { import('svelte/store').Writable< import('@supabase/gotrue-js').User > } */
export const authUser = writable(supabase.auth.user())
export const isProtectedRoute = writable(false)