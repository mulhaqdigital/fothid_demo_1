import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zznwjzbgockekloacagb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bndqemJnb2NrZWtsb2FjYWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NTQ2OTYsImV4cCI6MjA1ODEzMDY5Nn0.nObqj1r3Q3YjFPdOFVp3T17pPESjCNdK16nVUXAVbZs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 