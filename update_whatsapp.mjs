import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zpcgghxxsianbsuucpxa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2dnaHh4c2lhbmJzdXVjcHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc3ODgsImV4cCI6MjA5NDAwMzc4OH0.0szuuszvW_YEXL9zDoEICrq4pOE1U9LLAIJ_cD7qvxY'
);

async function updateWhatsApp() {
  console.log('Fetching current settings...');
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'site_settings')
    .single();

  if (error) {
    console.error('Failed to fetch settings:', error);
    return;
  }

  const settings = data.value;
  settings.whatsappNumber = '918885999979';

  console.log('Updating settings with new WhatsApp number...');
  const { error: updateError } = await supabase
    .from('settings')
    .upsert({ key: 'site_settings', value: settings });

  if (updateError) {
    console.error('Failed to update settings:', updateError);
  } else {
    console.log('Successfully updated WhatsApp number in Supabase to 918885999979');
  }
}

updateWhatsApp().catch(console.error);
