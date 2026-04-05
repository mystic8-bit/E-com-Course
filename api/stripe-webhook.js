// This is conceptual logic for your Vercel API folder
if (stripe_event === 'checkout.session.completed') {
   const customer_email = event.data.object.customer_details.email;
   
   // Tell Supabase to find this email and set has_paid = true
   await supabase
     .from('profiles')
     .update({ has_paid: true })
     .eq('email', customer_email);
}
