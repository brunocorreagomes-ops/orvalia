const fs = require('fs');

// Patch Services
let servicesContent = fs.readFileSync('src/components/Services.tsx', 'utf8');
servicesContent = servicesContent.replace(/import \{ Sparkles, Layout, Globe, Activity \} from "lucide-react";/, "import { IconBrand, IconWeb, IconLocal, IconComm } from './CustomIcons';");
servicesContent = servicesContent.replace(/<Sparkles className="text-brand-accent-light" size=\{28\} \/>/, '<IconBrand className="text-brand-accent-light" size={28} />');
servicesContent = servicesContent.replace(/<Layout className="text-brand-accent-light" size=\{28\} \/>/, '<IconWeb className="text-brand-accent-light" size={28} />');
servicesContent = servicesContent.replace(/<Globe className="text-brand-accent-light" size=\{28\} \/>/, '<IconLocal className="text-brand-accent-light" size={28} />');
servicesContent = servicesContent.replace(/<Activity className="text-brand-accent-light" size=\{28\} \/>/, '<IconComm className="text-brand-accent-light" size={28} />');
fs.writeFileSync('src/components/Services.tsx', servicesContent);

// Patch TrustSection
let trustContent = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
trustContent = trustContent.replace(/import \{ Star, CheckCircle2, TrendingUp, Users, Shield, Cpu \} from "lucide-react";/, "import { TrendingUp } from 'lucide-react';\nimport { IconElite, IconAuthority, IconDesign } from './CustomIcons';");
trustContent = trustContent.replace(/icon: Users,/, 'icon: IconElite,');
trustContent = trustContent.replace(/icon: Shield,/, 'icon: IconAuthority,');
trustContent = trustContent.replace(/icon: CheckCircle2,/, 'icon: IconDesign,');
fs.writeFileSync('src/components/TrustSection.tsx', trustContent);
