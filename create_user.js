import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zpcgghxxsianbsuucpxa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2dnaHh4c2lhbmJzdXVjcHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc3ODgsImV4cCI6MjA5NDAwMzc4OH0.0szuuszvW_YEXL9zDoEICrq4pOE1U9LLAIJ_cD7qvxY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createAdmin() {
  const { data, error } = await supabase.auth.signUp({
    email: 'owner@regilaqua.in',
    password: 'RegilAqua@2026',
  });

  if (error) {
    console.error('Error creating user:', error.message);
  } else {
    console.log('User created successfully:', data.user?.email);
    console.log('IMPORTANT: If you haven\'t disabled "Confirm Email" in Supabase, this user will need verification.');
  }
}

createAdmin();
