import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hpgiqzuyhvgnzynmbcka.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZ2lxenV5aHZnbnp5bm1iY2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MjcwNDUsImV4cCI6MjA0MDEwMzA0NX0.2dHLDSPUkC-PWS1dXtlHA0CUMKv_a1o5PTsJh8r_9Us"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
