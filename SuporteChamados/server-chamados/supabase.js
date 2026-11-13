// supabase.js - Conexão Direta com o Supabase
const { createClient } = require("@supabase/supabase-js");

// 1. Cole a sua URL do Supabase dentro das aspas abaixo:
const supabaseUrl = "https://bogvtguoopdsgulexdar.supabase.co";

// 2. Cole a sua SUPABASE_PUBLISHABLE_KEY (anon) dentro das aspas abaixo:
const supabaseKey = "salve sua chave aqui";

// Inicializa o cliente do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
