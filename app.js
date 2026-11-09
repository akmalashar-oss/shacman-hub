// =========================================================
// SHACMAN INDONESIA BRANDING HUB — 2026 OFFICIAL CATALOGUE EDITION
// Data Source: G:\My Drive\SHACMAN ID\shacman 2026 catalogue
// Official Brand Palette:
// Primer: Biru (#0061ab) | Sekunder: Navy Gelap (#0b2545) | Tersier: Kuning/Amber (#f2b705)
// =========================================================

const STORAGE_KEY = 'SHACMAN_BRANDING_HUB_2026_V3_REAL';
const BACKUP_KEY = 'SHACMAN_BRANDING_HUB_LAST_BACKUP';

const PLATFORMS = [
  { id: 'Instagram', label: 'Instagram', color: '#E1306C', bg: 'bg-pink-50 text-pink-700 border-pink-200', icon: 'instagram' },
  { id: 'TikTok', label: 'TikTok', color: '#00F2FE', bg: 'bg-cyan-50 text-cyan-700 border-cyan-200', icon: 'music-2' },
  { id: 'LinkedIn Page', label: 'LinkedIn Page', color: '#0A66C2', bg: 'bg-sky-50 text-shacman-blue border-blue-200', icon: 'linkedin' },
  { id: 'Facebook Page', label: 'Facebook Page', color: '#1877F2', bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: 'facebook' },
  { id: 'Threads', label: 'Threads', color: '#A855F7', bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: 'at-sign' },
  { id: 'YouTube', label: 'YouTube', color: '#FF0000', bg: 'bg-red-50 text-red-700 border-red-200', icon: 'youtube' },
  { id: 'YT Shorts', label: 'YT Shorts', color: '#f2b705', bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: 'zap' }
];

const PLAN_STATUSES = [
  { id: 'Draft / Brief', label: 'Draft / Brief', badge: 'bg-slate-50 text-slate-600 border-slate-200' },
  { id: 'Shooting / Design', label: 'Shooting / Design', badge: 'bg-[#f2b705]/15 text-[#f2b705] border-[#f2b705]/40' },
  { id: 'Editing / QC', label: 'Editing / QC', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'Ready / Scheduled', label: 'Ready / Scheduled', badge: 'bg-[#0061ab]/30 text-slate-600 border-blue-200' },
  { id: 'Published', label: 'Published', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
];

// 5 Content Pillar (v4)
const PILLARS = ['Product Introduction', 'Customer & Field Activities', 'Branding & Corporate', 'Education & Engagement', 'Trend Jacking'];
const PILLAR_INFO = {
  'Product Introduction': { short: 'Product', desc: 'Model, fitur, spesifikasi, use case, dan walkaround produk', cls: 'bg-sky-50 text-slate-600 border-blue-200' },
  'Customer & Field Activities': { short: 'Field', desc: 'Kunjungan customer, demo unit, delivery, dan operasional lapangan', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'Branding & Corporate': { short: 'Branding', desc: 'Profil perusahaan, event, tim, pameran, dan update SHACMAN Indonesia', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
  'Education & Engagement': { short: 'Education', desc: 'Tips truk, edukasi perawatan, FAQ, kuis, dan insight industri', cls: 'bg-purple-50 text-purple-700 border-purple-200' },
  'Trend Jacking': { short: 'Trend', desc: 'Menumpang tren atau momen yang sedang ramai', cls: 'bg-pink-50 text-pink-700 border-pink-200' }
};
// Pemetaan pillar lama (10 pilar) ke 5 pillar baru
const OLD_PILLAR_MAP = {
  'Produk & Konten Merek': 'Product Introduction', 'Product Knowledge & Spesifikasi': 'Product Introduction', 'New Energy (EV / CNG / LNG)': 'Product Introduction',
  'Aksi Medan Tambang & Hauling': 'Customer & Field Activities', 'Testimoni & Global Case Study': 'Customer & Field Activities',
  'Event & Pameran': 'Branding & Corporate', 'Momen & Hari Besar': 'Branding & Corporate', 'Brand Heritage & Promo Fleet': 'Branding & Corporate', 'Lowongan / Employer Branding': 'Branding & Corporate',
  'CARE Service & Genuine Parts': 'Education & Engagement'
};
// Pillar per materi konten untuk data post bawaan (lebih akurat daripada pemetaan nama)
const GROUP_PILLAR = {
  tanjakan: 'Customer & Field Activities', jalan_berdebu: 'Customer & Field Activities', shaanxi_semarang: 'Customer & Field Activities', yt_siap_taklukkan: 'Customer & Field Activities',
  jalan_terus: 'Education & Engagement', love_trend: 'Trend Jacking', toys: 'Trend Jacking'
};
function mapPillarName(n) { return OLD_PILLAR_MAP[n] || n; }
function pillarBadge(name, full = false) {
  const i = PILLAR_INFO[name];
  return `<span class="px-2 py-0.5 rounded border font-semibold text-[10px] ${i ? i.cls : 'bg-slate-50 text-slate-600 border-slate-200'}" title="${i ? i.desc : ''}">${full ? (name || '-') : (i ? i.short : (name || '-'))}</span>`;
}
const UNIT_GENERAL = 'Umum / Non-produk';
const UNIT_UNKNOWN = 'Belum diidentifikasi';
const DATA_VERSION = 4;

// Re-tag post bawaan (v2). CATATAN: ini dugaan dari judul post yang terpotong di CSV — periksa ulang di tab Post Data.
// Hanya menimpa nilai lama bawaan ('Produk & Konten Merek' / 'CARE Service & Brand'); hasil edit manual tidak disentuh.
const P_EVENT = 'Event & Pameran', P_MOMEN = 'Momen & Hari Besar', P_HERITAGE = 'Brand Heritage & Promo Fleet';
const P_KNOW = 'Product Knowledge & Spesifikasi', P_FIELD = 'Aksi Medan Tambang & Hauling', P_NEW = 'New Energy (EV / CNG / LNG)';
const RETAG_V2 = {
  'li-01': { u: UNIT_GENERAL }, 'li-02': { p: P_EVENT, u: UNIT_GENERAL }, 'li-03': { p: P_EVENT, u: UNIT_GENERAL },
  'li-04': { u: UNIT_GENERAL }, 'li-05': { u: UNIT_GENERAL }, 'li-07': { u: UNIT_UNKNOWN },
  'li-08': { p: P_MOMEN, u: UNIT_GENERAL }, 'li-13': { p: P_KNOW }, 'li-14': { p: P_HERITAGE, u: UNIT_GENERAL },
  'li-16': { p: P_KNOW }, 'li-18': { p: P_EVENT, u: UNIT_GENERAL }, 'li-19': { u: UNIT_GENERAL },
  'li-20': { p: P_HERITAGE, u: UNIT_GENERAL }, 'li-21': { u: UNIT_UNKNOWN }, 'li-22': { p: P_MOMEN, u: UNIT_GENERAL },
  'li-23': { u: UNIT_GENERAL }, 'li-24': { u: UNIT_GENERAL },
  'tt-01': { p: P_NEW }, 'tt-02': { p: P_FIELD, u: UNIT_UNKNOWN }, 'tt-03': { p: P_FIELD, u: UNIT_UNKNOWN },
  'ig-01': { u: UNIT_UNKNOWN }, 'ig-02': { u: UNIT_UNKNOWN }, 'ig-03': { p: P_HERITAGE, u: UNIT_GENERAL }, 'ig-04': { p: P_NEW },
  'fb-01': { p: P_NEW },
  'yts-01': { p: P_FIELD, u: UNIT_UNKNOWN }, 'yts-02': { p: P_FIELD, u: UNIT_UNKNOWN }, 'yts-03': { p: P_NEW }
};
function applyRetagV2(post) {
  const r = RETAG_V2[post.id];
  if (!r) return post;
  if (r.p && post.pillar === 'Produk & Konten Merek') post.pillar = r.p;
  if (r.u && post.unit === 'CARE Service & Brand') post.unit = r.u;
  return post;
}

// Data Korporat Resmi dari "2026 Universal Foldout.pdf" & "2026 Inside SHACMAN.pdf"
const CORPORATE_STATS_2026 = [
  { value: '2.6 Million+', label: 'Total Penjualan Global', copy: 'Lebih dari 2,6 Juta unit truk SHACMAN telah beroperasi melayani pelanggan di seluruh dunia sejak 1968.' },
  { value: '400,000+', label: 'Total Penjualan Ekspor', copy: 'Lebih dari 400.000 unit truk SHACMAN telah diekspor ke pasar internasional.' },
  { value: '160+ Negara', label: 'Jangkauan Pasar Dunia', copy: 'SHACMAN hadir di lebih dari 160 negara dan wilayah di seluruh dunia.' },
  { value: '4,132 Paten', label: '3.600+ Ahli R&D', copy: 'Didukung 3.600+ ahli R&D dan 4.132 paten teknologi pemenang National Prize for Progress in Science & Technology.' },
  { value: '7 + 17 Pabrik', label: '7 Mega-Factory & 17 KD', copy: '7 Mega-Factories di China (>70% otomasi cerdas, kapasitas 300.000 unit/tahun) & 17 pabrik perakitan KD lokal di luar negeri.' },
  { value: '600+ Station', label: 'Jaringan Servis Dunia', copy: 'Didukung 600+ Service Stations dan 2-Hour Rapid Response dalam program SHACMAN CARE Service.' },
  { value: '60+ Gudang', label: 'Spare Parts Warehouse', copy: '60+ Spare Parts Warehouses, 180+ Accessories Channels, dan 120+ Authorized Parts Dealerships.' },
  { value: '28,000+ NEV', label: 'Penjualan New Energy', copy: 'Penjualan truk New Energy (EV/Hybrid/Hydrogen) SHACMAN menembus 28.000+ unit dengan penghematan TCO 30%-50%.' }
];

// Matriks Spesifikasi Teknis Resmi dari "2026 Universal Foldout.pdf" & "2026 Inside SHACMAN.pdf"
const SPEC_MATRIX_2026 = [
  {
    model: 'X6000 Tractor',
    series: '6000 Series (Premium Flagship)',
    drive: '4x2 / 6x2 / 6x4',
    weight: 'GCW 42 – 90 Ton',
    engine: 'WP13, M13, Z14, 15N, X15D (Euro III–VI)',
    power: '480 – 600 PS | 2400 – 2750 N·m',
    transmission: 'AMT (12/16) / MT (16)',
    axle: 'Depan 7.3t/9.5t | Belakang 13t Single / Double-Stage',
    app: 'Long-distance logistics, heavy transportation, flat-floor luxury cabin (Tersedia X6000 CNG 530 HP & X6000e BEV 400/600 kW)'
  },
  {
    model: 'X6000 Dump Truck',
    series: '6000 Series (Smart Construction)',
    drive: '8x4',
    weight: 'Heavy Duty',
    engine: 'Weichai / Cummins Flagship',
    power: 'Hingga 560 HP',
    transmission: 'AMT / MT Heavy Duty',
    axle: 'Heavy-Duty Double-Stage Axle',
    app: 'High-end smart dump truck combining superior power with luxury cabin comfort'
  },
  {
    model: 'H6000 Tractor',
    series: '6000 Series (Multi-purpose Heavy)',
    drive: '4x2 / 6x4',
    weight: 'GCW 40 – 110 Ton',
    engine: 'WP13 (Euro III–V)',
    power: '480 – 580 PS | 2300 – 2600 N·m',
    transmission: 'AMT (12/16)',
    axle: 'Depan 7.3t/9.5t | Belakang 13t Single / 16t Double-Stage',
    app: 'Long-distance logistics, standard load & medium-to-short heavy transportation'
  },
  {
    model: 'H6000 Dump Truck',
    series: '6000 Series (Heavy Construction)',
    drive: '6x4 / 8x4',
    weight: 'GVW 50 – 70 Ton',
    engine: 'WP13, M13, M15 (Euro III–V)',
    power: '440 – 560 PS | 2100 – 2600 N·m',
    transmission: 'AMT (12) / MT (12)',
    axle: 'Depan 7.5t/9.5t | Belakang 16t Double-Stage',
    app: 'Heavy transportation, mining transportation, harsh construction sites'
  },
  {
    model: 'M6000 Cargo Truck',
    series: '6000 Series (Premium Intercity)',
    drive: '4x2 / 6x2R / 8x4',
    weight: 'GVW 18 – 25 Ton',
    engine: 'WP7H (Euro V)',
    power: '300 – 350 PS | 1000 – 1300 N·m',
    transmission: 'AMT (8/9)',
    axle: 'Depan 4.8t/7.3t | Belakang 10t / 11.5t Single-Stage',
    app: 'Industry-rare flat-floor cargo truck: Intercity express delivery & Cold-Chain transportation'
  },
  {
    model: 'X5000 Tractor',
    series: '5000 Series (Ultimate Comfort)',
    drive: '4x2 / 6x4',
    weight: 'GCW 40 – 120 Ton',
    engine: 'WP10H, WP12, WP13, WP13NG, M10, M13, X12, Z14, 15N (Euro II–VI)',
    power: '350 – 560 HP | 1800 – 2600 N·m',
    transmission: 'AMT (12/16) / MT (12/16)',
    axle: 'Depan 7.5t/9.5t | Belakang 11.5t / 13t / 16t',
    app: 'Long-distance standard load & heavy-duty highway logistics (Tersedia X5000 CNG/LNG 430-480 HP & X5000e BEV 270/410 kW)'
  },
  {
    model: 'X5000 Dump Truck',
    series: '5000 Series (Urban Muck & Mining)',
    drive: '6x4 / 8x4',
    weight: 'GVW 50 / 70 / 90 Ton',
    engine: 'WP10, WP12, WP13, WP13NG, M10, M13, X12 (Euro II–VI)',
    power: '340 – 560 HP | 1250 – 2550 N·m',
    transmission: 'AMT (12/13) / MT (12/16)',
    axle: 'Depan 9.5t | Belakang 16t (Ratio 5.262/5.92)',
    app: 'Urban construction waste & heavy-duty mining engineering (Tersedia X5000e BEV 290/430 kW)'
  },
  {
    model: 'L5000 Cargo Truck',
    series: '5000 Series ("Urban Agile Mover")',
    drive: '4x2 / 6x4',
    weight: 'GVW 12 – 18t / 25 Ton',
    engine: 'Cummins D6.7, ISD (Euro VI)',
    power: 'Hingga 290 HP | 1100 N·m',
    transmission: 'MT (1000 N·m)',
    axle: 'Depan 4.8t | Belakang 10t / 11.5t',
    app: 'Short and medium-distance intercity & regional logistics lightweight revolution'
  },
  {
    model: 'T5000 & T5000e Terminal Tractor',
    series: '5000 Series ("The Harbor Legend")',
    drive: '4x2 / 6x4',
    weight: 'Port Container Scheduling',
    engine: 'Cummins Engine / BEV 210–260 kW',
    power: 'Diesel Cummins / 210–260 kW Peak Electric',
    transmission: 'Automatic / Direct Electric Drive',
    axle: 'Heavy-Duty Port Terminal Axle',
    app: 'Non-stop port container & terminal towing operations (Diesel & Zero-Emission BEV)'
  },
  {
    model: 'X3000 Tractor & Dump',
    series: '3000 Series (Heavy-Duty Benchmark)',
    drive: '4x2 / 6x4 / 8x4',
    weight: 'GCW 40 – 120 Ton',
    engine: 'WP9, WP10, WP10H, WP12, WP13, WP13NG, M10, M13 (Euro II–V)',
    power: '340 – 560 HP | 1800 – 2600 N·m',
    transmission: 'AMT (16) / MT (12/16)',
    axle: 'Depan 7.5t/9.5t | Belakang 13t / 16t Double-Stage',
    app: 'Severe off-road mining, heavy hauling & high-speed highways (Tersedia X3000 CNG/LNG 430 HP)'
  },
  {
    model: 'H3000S Tractor & Dump',
    series: '3000 Series (Upgraded High-Efficiency)',
    drive: '4x2 / 6x4 / 8x4',
    weight: 'GVW/GCW 40 – 70 Ton',
    engine: 'WP7, WP10, WP10H, WP12, WP12H, M10 (Euro II–V)',
    power: '270 – 460 HP | 1160 – 2200 N·m',
    transmission: 'AMT (12/16) / MT (9/10/12)',
    axle: 'Depan 7.5t/9.5t | Belakang 13t / 16t',
    app: 'Port, regional highway & standard earthmoving (Terbukti irit 28.37 L/100km di uji lintas Saudi Arabia)'
  },
  {
    model: 'H3000 Tractor & Dump',
    series: '3000 Series (Classic Port & Earthmoving)',
    drive: '4x2 / 6x4 / 8x4',
    weight: 'GVW 25 / 50 / 70 Ton',
    engine: 'WP6, WP10, WP12, M10 (Euro II–V)',
    power: '210 – 460 HP | 750 – 2110 N·m',
    transmission: 'MT (9/10/12)',
    axle: 'Depan 7.5t/9.5t | Belakang 16t',
    app: 'Construction sites, urban construction, standard port & regional logistics'
  },
  {
    model: 'F3000 Dump & Tractor',
    series: '3000 Series (Off-Road & Mining Legend)',
    drive: '4x2 / 6x4 / 8x4',
    weight: 'GVW 50 / 70 / 90 Ton',
    engine: 'WP10, WP12, WP13NG, M10 (Euro II–V)',
    power: '300 – 550 HP | 1250 – 2200 N·m',
    transmission: 'MT (10/12)',
    axle: 'Depan 9.5t | Belakang 16t Double-Stage (850×300 / 850×320 Frame)',
    app: 'Muddy and potholed mining roads with steep grades (Terbukti 1.300+ unit di proyek Trans-Guinean Railway)'
  },
  {
    model: 'L3000 Cargo Truck',
    series: '3000 Series (Urban Distribution)',
    drive: '4x2 / 6x4',
    weight: 'GVW 12 – 18t / 25 Ton',
    engine: 'WP6, WP7, WP7H, ISD (Euro II–V)',
    power: '180 – 300 HP | 650 – 1160 N·m',
    transmission: 'AMT (8) / MT (8/9)',
    axle: 'Depan 4.8t | Belakang 10t',
    app: 'Urban roads, intercity distribution, water tanker, crane, fire truck & sanitation chassis'
  },
  {
    model: 'Offset Mining Dump Truck',
    series: 'Specialized Series (Mining Behemoth)',
    drive: '6x4 Off-Highway',
    weight: 'Payload Capacity 110 Ton',
    engine: 'High-Horsepower Mining Powertrain',
    power: 'Ultra-Heavy Mining Spec',
    transmission: 'Heavy-Duty Mining Transmission',
    axle: 'Extreme Off-Road Mining Axles',
    app: 'Dirancang khusus untuk open-pit mining dengan kapasitas muatan 110 Ton di luar batas truk jalan raya biasa'
  }
];

const SHACMAN_UNITS_INFO = [
  {
    series: '6000 Series (X6000 / H6000 / M6000)',
    tagline: '"Intelligence Leads Efficiency" — Premium Flagship Series',
    engine: 'WP13 / M13 / Z14 / X15D / WP7H (300 – 600+ HP)',
    usp: 'Puncak rekayasa 10 tahun SHACMAN: kabin lantai rata (flat-floor) super mewah, efisiensi termal mesin hingga 50%, transmisi Gen2 AMT efisiensi 99.7%, serta varian X6000e EV & CNG.',
    target: 'Long-Haul Executive Logistics, Heavy Transport 110T, Cold-Chain & Express Intercity'
  },
  {
    series: '5000 Series (X5000 / L5000 / T5000)',
    tagline: '"Enjoy Ultimate Comfort" — Sub-Flagship & Port Legend',
    engine: 'Weichai WP10H/WP12/WP13 & Cummins D6.7/ISD (290 – 560 HP)',
    usp: 'Kombinasi sasis berbobot ringan (lightweight) untuk payload maksimal dan kabin ultra-nyaman. Mencakup X5000 Tractor/Dump, L5000 "Urban Agile Mover", & T5000 "The Harbor Legend".',
    target: 'Standard-Load Highway Logistics, Urban Construction Muck, Port Terminal Operation'
  },
  {
    series: '3000 Series (X3000 / H3000S / H3000 / F3000 / L3000)',
    tagline: '"Quality Creates Benefit" — Classic & Versatile Workhorse',
    engine: 'Weichai WP6–WP13 & Cummins M10/M13 (180 – 560 HP)',
    usp: 'Tulang punggung pertambangan, konstruksi, dan logistik: F3000 sang legenda lumpur tambang (frame 850x320 + gardan 16T double-stage), X3000 heavy-duty 120T, & H3000S sang juara irit BBM (28.37 L/100km).',
    target: 'Kontraktor Tambang Batubara/Nikel, Konstruksi Infrastruktur, Logistik Pelabuhan & Kota'
  },
  {
    series: 'New Energy Series (BEV / CNG / LNG / Hydrogen)',
    tagline: '"Drive the Future with Electric" — Clean Energy Matrix',
    engine: '460kW E-Axle BEV & 590 HP LNG/CNG (Efisiensi Termal 54.16%)',
    usp: '20 tahun riset New Energy dengan 1.170 paten: penurunan TCO 30%–50% dibanding diesel, 5-menit bottom battery swapping, dual-gun 900A ultra-fast charging, serta uji keselamatan ekstrem.',
    target: 'Green Mining, Zero-Emission Port (T5000e), Green Regional & Building Material Logistics'
  },
  {
    series: 'Specialized Series & 110T Offset Mining',
    tagline: '"Specializing in Tailored Solutions" — Custom Special Vehicles',
    engine: 'X6000 / X5000 / X3000 / H3000S / F3000 / L3000 Chassis',
    usp: 'Meliputi Offset Mining Dump Truck kapasitas 110 Ton untuk tambang terbuka, Concrete Mixer, Concrete Pump Truck, Crane-Carrying Truck, Water Tanker, Fire Truck, Hazmat, & Sanitation Truck.',
    target: 'Open-Pit Mining Contractor, Batching Plant & Readymix, Municipal & Pemadam Kebakaran'
  },
  {
    series: 'SHACMAN "CARE" Service & Global Supply Chain',
    tagline: 'Customized • All-round • Remote • Empowering (2-Hour Response)',
    engine: 'Weichai • Cummins • FAST • Eaton • Allison • Hande Axle',
    usp: '600+ stasiun servis, 60+ gudang suku cadang, 3-Tier Accessory Guarantee Model, SHACMAN Telematics peringatan dini proaktif, serta tim Emergency Response & on-site expert 24/7.',
    target: 'Fleet Manager, Kepala Mekanik, Direktur Operasional & Procurement B2B'
  }
];

const GLOBAL_CASE_STUDIES_2026 = [
  {
    region: 'Saudi Arabia — Full-Scenario 4,650 km Test',
    model: 'H3000S High-Efficiency Tractor',
    result: 'Konsumsi BBM 28.37 L/100km (dan 25–28 L/100km setelah 200.000 km) vs kompetitor 30.99 L/100km. Menghemat $289,900 USD/tahun biaya solar untuk armada 100 unit!'
  },
  {
    region: 'Trans-Guinean Railway — Extreme Monsoon Mining',
    model: '1,300+ Unit F3000 Super Dump Trucks & Tractors',
    result: 'Beroperasi 24/7 selama 3+ tahun di suhu >30°C dan curah hujan 4.000mm+ yang mengubah jalan tambang menjadi lumpur ekstrem, didukung tim expert on-site 24/7.'
  },
  {
    region: 'Mongolia — Coca-Cola Fleet in -40°C Extreme Cold',
    model: 'X6000 Premium Tractor + SHACMAN Telematics',
    result: 'Menembus suhu beku -40°C di jalanan es Mongolia tanpa satu pun mogok (Zero Breakdowns) dengan tingkat kesiapan armada (Fleet Uptime) di atas 98.5%.'
  },
  {
    region: 'Morocco & Southeastern Africa — Green & Cross-Border',
    model: 'X6000e (500+ kWh Battery-Swapping EV) & X6000',
    result: 'X6000e menjadi tolok ukur baru transportasi nol-emisi material bangunan di Afrika Utara, sementara X6000 mematahkan monopoli truk Eropa di jalur lintas batas Afrika.'
  }
];

const CATALOGUE_PDF_FILES_2026 = [
  { name: '2026 Inside SHACMAN (Corporate & Full Portfolio)', file: '2026 Inside SHACMAN.pdf', size: '14.5 MB' },
  { name: '2026 Universal Foldout (Full Specification Matrix)', file: '2026 Universal Foldout.pdf', size: '9.9 MB' },
  { name: '2026 SHACMAN Brand Image Catalogue', file: '2026 SHACMAN Brand Image.pdf', size: '34.9 MB' },
  { name: '2026 6000 Series (X6000 / H6000 / M6000)', file: '2026 6000 Series.pdf', size: '24.1 MB' },
  { name: '2026 X6000 Flagship Catalogue', file: '2026 X6000.pdf', size: '25.3 MB' },
  { name: '2026 X5000 Series Catalogue', file: '2026 X5000.pdf', size: '52.3 MB' },
  { name: '2026 L5000 Cargo Truck Catalogue', file: '2026 L5000.pdf', size: '28.4 MB' },
  { name: '2026 T5000 Terminal Tractor Catalogue', file: '2026 T5000.pdf', size: '23.5 MB' },
  { name: '2026 X3000 Series Catalogue', file: '2026 X3000.pdf', size: '73.5 MB' },
  { name: '2026 H3000S Upgraded Series Catalogue', file: '2026 H3000S.pdf', size: '75.7 MB' },
  { name: '2026 H3000 Series Catalogue', file: '2026 H3000.pdf', size: '24.1 MB' },
  { name: '2026 F3000 Series Catalogue', file: '2026 F3000.pdf', size: '16.5 MB' },
  { name: '2026 L3000 Cargo Series Catalogue', file: '2026 L3000.pdf', size: '53.5 MB' },
  { name: '2026 New Energy Product (BEV / Hybrid / FCEV)', file: '2026 New Energy Product.pdf', size: '23.0 MB' },
  { name: '2026 Specialized Truck Catalogue', file: '2026 Specialized Truck.pdf', size: '27.9 MB' },
  { name: '2026 F3000 International Edition (FR)', file: '2026 F3000 French.pdf', size: '43.8 MB' }
];

const HASHTAG_PACKS = [
  {
    title: 'Instagram & Facebook (2026 Product & Mining Fleet)',
    tags: '#ShacmanIndonesia #TruckingMadeBetter #ShacmanX6000 #ShacmanX3000 #ShacmanF3000 #ShacmanH3000S #HeavyDutyTruck #TrukTambangIndonesia #WeichaiEngine #HandeAxle'
  },
  {
    title: 'TikTok & YT Shorts (FYP Aksi Tambang & Spesifikasi)',
    tags: '#Shacman #ShacmanIndonesia #TruckingMadeBetter #ShacmanF3000 #ShacmanX3000 #ShacmanX6000 #TrukTambangKalimantan #TrukTambangSulawesi #AlatBeratIndonesia #MonsterTambang'
  },
  {
    title: 'LinkedIn Page (B2B Corporate, TCO & New Energy EV)',
    tags: '#ShacmanIndonesia #TruckingMadeBetter #SuccessWithQuality #CommercialVehicles #FleetManagement #MiningLogistics #NewEnergyTrucks #ShacmanCARE #TotalCostOfOwnership'
  }
];

const currentYM = new Date().toISOString().slice(0, 7);

// =========================================================
// DATA RIIL LAPORAN SOCMED (Sumber: G:\My Drive\cowork\*.csv)
// - laporan_linkedin_demografi_followers.csv
// - laporan_linkedin_posting.csv
// - laporan_ringkasan_socmed.csv
// =========================================================
const LINKEDIN_DEMOGRAPHICS = {
  totalFollowers: 280,
  Industri: [
    ['Machinery Manufacturing', 39, 13.9], ['Motor Vehicle Manufacturing', 29, 10.4],
    ['Industrial Machinery Manufacturing', 24, 8.6], ['Mining', 20, 7.1],
    ['Transportation, Logistics, Supply Chain and Storage', 10, 3.6], ['Coal Mining', 7, 2.5],
    ['Retail Office Equipment', 7, 2.5], ['Manufacturing', 6, 2.1],
    ['Agriculture, Construction, Mining Machinery Manufacturing', 5, 1.8], ['Automation Machinery Manufacturing', 5, 1.8]
  ],
  Seniority: [
    ['Entry', 100, 35.7], ['Others', 90, 32.1], ['Senior', 40, 14.3], ['Manager', 26, 9.3], ['Director', 17, 6.1],
    ['Training', 2, 0.7], ['VP', 2, 0.7], ['Owner', 2, 0.7], ['CXO', 1, 0.4]
  ],
  Fungsi: [
    ['Operations', 69, 24.6], ['Sales', 41, 14.6], ['Engineering', 17, 6.1], ['Marketing', 10, 3.6],
    ['Business Development', 8, 2.9], ['Information Technology', 8, 2.9], ['Accounting', 3, 1.1],
    ['Finance', 3, 1.1], ['Customer Success and Support', 3, 1.1], ['Administrative', 2, 0.7]
  ]
};

const TIKTOK_AUDIENCE = {
  period: '2 Sep – 1 Nov 2026',
  viewers: [['Indonesia', 97], ['Pria', 83], ['Usia 25–34 tahun', 63.8]],
  followers: [['Indonesia', 65.3], ['Others (luar Indonesia)', 31.6], ['Pria', 79]],
  peakHour: '06.00'
};

const MONTHLY_TRENDS = {
  linkedin: [
    { month: 'Agustus 2026', impressions: 1016, reached: 433, reactions: 7, comments: 0, reposts: 1, er: 0.79, clicks: 38, newFollowers: 22, posts: 2, note: 'Pembanding (di luar periode laporan)' },
    { month: 'September 2026', impressions: 4939, reached: 2488, reactions: 92, comments: 5, reposts: 1, er: 1.98, clicks: 876, newFollowers: 108, posts: 7 },
    { month: 'Oktober 2026', impressions: 7167, reached: 3009, reactions: 114, comments: 3, reposts: 0, er: 1.63, clicks: 1053, newFollowers: 126, posts: 16 }
  ],
  linkedinFollowerSnapshots: [['17 Sep 2026', 50], ['13 Okt 2026', 159], ['2 Nov 2026', 280]],
  tiktokNetFollowers: [['September 2026', 45], ['Oktober 2026', 144]],
  combinedGrowth: { sep: 153, okt: 270, changePct: 76.5 }
};

const FORMAT_BREAKDOWN = {
  instagram: {
    impressions: [['Reels', 3500], ['Postingan', 2200], ['Cerita', 469]],
    interactions: [['Reels', 125], ['Postingan', 71], ['Cerita', 10]],
    extra: [['Kunjungan profil', 385], ['Ketukan tautan bio', 36], ['Ketukan alamat bisnis', 0], ['Tayangan dari pengikut', '23%'], ['Tayangan dari non-pengikut', '77%']]
  },
  facebook: {
    impressions: [['Reels', 1527], ['Foto', 100], ['Beberapa foto', 46]],
    published: [['Cerita', 32], ['Foto', 15], ['Reels', 13]],
    extra: [['Kunjungan halaman', 123], ['Klik tautan', 0], ['Percakapan dimulai', '1 (tanggapan 100%)'], ['Tayangan non-pengikut (28 hr)', '98,5%']]
  },
  youtube: {
    shorts: [['Views', 5134], ['Engaged views', 2339], ['Like', 40], ['Share', 0], ['Subscribers baru', 2], ['Jumlah Shorts', 3]],
    longVideo: [['Views', 175], ['Thumbnail CTR', '8,3%'], ['Rata-rata durasi tonton', '0:44']],
    channel: [['Total views', 5309], ['Watch time', '17,2 jam'], ['Audiens bulanan', '±2.400'], ['Total subscribers', 4]],
    note: 'Views hampir nol sebelum ±21 Okt; naik setelah video 22 Okt "Next Move, Next Horizon" & 23 Okt "Walkaround SHACMAN H3000S".'
  }
};

function mkPost(o) {
  return {
    reach: 0, clicks: 0, ctr: 0, likes: 0, comments: 0, shares: 0, interactions: 0,
    newFollowers: 0, notes: '', link: '', metricsPartial: false, ...o
  };
}

function getRealPosts() {
  // Data lengkap ada di data-posts.js; fallback ke data lama bila file itu tidak termuat
  const src = (typeof window !== 'undefined' && Array.isArray(window.REAL_POSTS_2026))
    ? window.REAL_POSTS_2026
    : _getRealPostsRaw().map(applyRetagV2);
  return src.map(p => ({ ...p, pillar: mapPillarName(p.pillar) }));
}

function _getRealPostsRaw() {
  const LI = 'LinkedIn Page', BRAND = 'Produk & Konten Merek', HIRE = 'Lowongan / Employer Branding';
  const IMG = 'tanpa label video (gambar/teks)', VID = 'video', CAR = 'carousel dokumen';
  const CAR_NOTE = 'Klik termasuk geser halaman carousel';
  const li = (n, date, title, pillar, format, views, clicks, ctr, likes, comments, shares, unit, notes = '') =>
    mkPost({ id: `li-${n}`, date, platform: LI, title, pillar, format, views, clicks, ctr, likes, comments, shares, unit, notes });

  return [
    li('01', '2026-08-21', '🚨 WE ARE HIRING — SALES SUPERVISOR 🚨 Location : East Jakarta What we’re looking for: ✅...', HIRE, IMG, 954, 67, 7.02, 10, 0, 1, 'CARE Service & Brand', 'Di luar periode laporan (Agustus)'),
    li('02', '2026-08-31', 'SHACMAN AT MINING INDONESIA 2026! Join us and discover the latest heavy-duty trucks, sp...', BRAND, IMG, 254, 24, 9.45, 5, 0, 0, 'CARE Service & Brand', 'Di luar periode laporan (Agustus)'),
    li('03', '2026-09-16', 'We are proud to participate in the Indonesia Mining Expo 2026, bringing you the innovat...', BRAND, CAR, 717, 644, 89.82, 7, 0, 2, 'CARE Service & Brand', CAR_NOTE),
    li('04', '2026-09-17', 'PT Shacman Motors Indonesia is currently expanding our exceptional after-sales service...', HIRE, IMG, 3104, 252, 8.12, 70, 5, 0, 'CARE Service & Brand'),
    li('05', '2026-09-21', 'From rugged off-road terrains to bustling industrial hubs, our diverse fleet is enginee...', BRAND, VID, 187, 2, 1.07, 1, 0, 1, 'CARE Service & Brand'),
    li('06', '2026-09-22', 'At SHACMAN, we understand that time is money in the logistics industry. The SHACMAN H30...', BRAND, VID, 313, 15, 4.79, 9, 1, 1, 'H3000S', 'Judul terpotong di CSV ("H30..."); seri diasumsikan H3000S — mohon cek'),
    li('07', '2026-09-24', 'Ready to load, built to deliver. 🚛💥 Maximize your payload and site productivity with SH...', BRAND, IMG, 245, 3, 1.22, 6, 0, 2, 'CARE Service & Brand'),
    li('08', '2026-09-25', 'Mari pererat tali persaudaraan di momen yang istimewa ini. Segenap keluarga besar SHACM...', BRAND, IMG, 181, 9, 4.97, 4, 0, 1, 'CARE Service & Brand'),
    li('09', '2026-09-29', 'Take a closer look at the SHACMAN H3000S in our latest walkaround. Designed with the ph...', BRAND, IMG, 191, 5, 2.62, 2, 0, 1, 'H3000S'),
    li('10', '2026-10-02', 'Take a closer look at the SHACMAN H3000S Tractor Head 6x4 where power meets precision....', BRAND, VID, 285, 3, 1.05, 6, 0, 2, 'H3000S'),
    li('11', '2026-10-05', 'Introducing the SHACMAN X5000 Tractor Head 6x4, engineered for heavy-duty logistics ope...', BRAND, VID, 302, 4, 1.32, 3, 0, 1, 'X5000'),
    li('12', '2026-10-09', 'Built for on-road operations in Indonesia. The SHACMAN H3000S and L3000 are on-road pla...', BRAND, VID, 220, 6, 2.73, 6, 0, 1, 'H3000S', 'Membahas H3000S & L3000'),
    li('13', '2026-10-13', 'SHACMAN H3000S Tractor Head: built for combined loads of up to 70 tonnes. Key specifica...', BRAND, CAR, 239, 196, 82.01, 1, 0, 1, 'H3000S', CAR_NOTE),
    li('14', '2026-10-15', 'From dusty roads to fully loaded hauls, every journey has a story. And in every story,...', BRAND, VID, 244, 4, 1.64, 2, 0, 1, 'CARE Service & Brand'),
    li('15', '2026-10-20', 'Extreme terrain? Built to handle it. The SHACMAN F3000 8x4 dump truck is engineered for...', BRAND, VID, 241, 2, 0.83, 4, 0, 2, 'F3000'),
    li('16', '2026-10-21', 'A tractor head earns only while it is moving. We engineered the H3000S around three thi...', BRAND, IMG, 186, 1, 0.54, 1, 0, 1, 'H3000S'),
    li('17', '2026-10-22', 'Heavy loads, tight schedules. The SHACMAN X3000 is ready to roll. For fleet managers, o...', BRAND, VID, 153, 3, 1.96, 3, 0, 0, 'X3000'),
    li('18', '2026-10-23', 'Driving Global Logistics Forward: Inside SHACMAN GlobeFest 2026 The commercial vehicle...', BRAND, VID, 166, 5, 3.01, 4, 0, 1, 'CARE Service & Brand'),
    li('19', '2026-10-26', 'We are expanding! PT Shacman Motors Indonesia is looking for driven Sales Staff to join...', HIRE, CAR, 1715, 610, 35.57, 21, 0, 2, 'CARE Service & Brand', CAR_NOTE),
    li('20', '2026-10-26', 'When Childhood Dreams Become Heavy-Duty Reality We all started with a simple dream. Wha...', BRAND, VID, 210, 1, 0.48, 2, 0, 1, 'CARE Service & Brand'),
    li('21', '2026-10-27', 'Maximizing fleet efficiency requires balancing maneuverability in tight routes with hea...', BRAND, IMG, 248, 4, 1.61, 7, 0, 1, 'CARE Service & Brand'),
    li('22', '2026-10-28', 'Happy Youth Pledge Day 2026 Today, we commemorate the 1928 Youth Pledge, a historic mil...', BRAND, IMG, 140, 5, 3.57, 2, 0, 0, 'CARE Service & Brand'),
    li('23', '2026-10-30', 'Hiring in Semarang: Sales Staff, PT Shacman Motors Indonesia We are looking for a Sales...', HIRE, IMG, 1282, 52, 4.06, 23, 1, 1, 'CARE Service & Brand'),
    li('24', '2026-10-30', 'Hiring: Vehicle Registration & Certification Specialist, Jakarta Timur Every truck we d...', HIRE, IMG, 1012, 63, 6.23, 22, 1, 1, 'CARE Service & Brand'),
    li('25', '2026-10-30', 'More trips, less drama: the SHACMAN H3000S 6x4 Tractor Head. Built for on-road operatio...', BRAND, IMG, 165, 5, 3.03, 3, 0, 0, 'H3000S'),

    // TikTok — video teratas (TikTok Studio)
    mkPost({ id: 'tt-01', date: '2026-10-02', platform: 'TikTok', title: 'Video Hybrid (Shacman Hybrid)', pillar: BRAND, format: VID, unit: 'New Energy EV/NG', views: 8043, newFollowers: 47, metricsPartial: true, notes: 'Traffic 96–97% For You; like/share tidak tersedia di CSV' }),
    mkPost({ id: 'tt-02', date: '2026-10-09', platform: 'TikTok', title: 'Video Tanjakan', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 15000, comments: 109, newFollowers: 27, metricsPartial: true, notes: 'Views perkiraan (±15K); Traffic 96–97% For You' }),
    mkPost({ id: 'tt-03', date: '2026-10-19', platform: 'TikTok', title: 'Video Perjalanan', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 9170, newFollowers: 24, metricsPartial: true, notes: 'Traffic 96–97% For You; like/share tidak tersedia di CSV' }),

    // Instagram — postingan teratas (Instagram Insight)
    mkPost({ id: 'ig-01', date: '2026-09-23', platform: 'Instagram', title: 'Love this trend', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 1300, interactions: 49, notes: 'Views dibulatkan dari 1,3K; interaksi total (tanpa rincian like/komentar)' }),
    mkPost({ id: 'ig-02', date: '2026-09-22', platform: 'Instagram', title: 'Jalan terus, pantang mundur', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 403, interactions: 31, notes: 'Interaksi total (tanpa rincian)' }),
    mkPost({ id: 'ig-03', date: '2026-10-07', platform: 'Instagram', title: 'From Shaanxi to Semarang', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 256, interactions: 23, notes: 'Interaksi total (tanpa rincian)' }),
    mkPost({ id: 'ig-04', date: '2026-10-02', platform: 'Instagram', title: 'Video Hybrid', pillar: BRAND, format: VID, unit: 'New Energy EV/NG', views: 276, metricsPartial: true, notes: 'Di TikTok 8.043 views; interaksi tidak tersedia' }),

    // Facebook — konten teratas (Meta Business Suite)
    mkPost({ id: 'fb-01', date: '2026-10-02', platform: 'Facebook Page', title: 'Video Hybrid', pillar: BRAND, format: VID, unit: 'New Energy EV/NG', views: 247, metricsPartial: true, notes: 'Di TikTok 8.043 views; interaksi tidak tersedia' }),

    // YouTube Shorts (YouTube Studio) — tanggal tayang tidak tercantum di CSV
    mkPost({ id: 'yts-01', date: '2026-10-31', dateEstimated: true, platform: 'YT Shorts', title: 'Tanjakan curam, tikungan tajam', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 3066, newFollowers: 2, metricsPartial: true, notes: 'Durasi 0:31; tanggal tayang tidak ada di CSV (diisi akhir periode 31 Okt)' }),
    mkPost({ id: 'yts-02', date: '2026-10-31', dateEstimated: true, platform: 'YT Shorts', title: 'shacman truck siap taklukkan', pillar: BRAND, format: VID, unit: 'CARE Service & Brand', views: 1298, metricsPartial: true, notes: 'Durasi 0:22; tanggal tayang tidak ada di CSV (diisi akhir periode 31 Okt)' }),
    mkPost({ id: 'yts-03', date: '2026-10-31', dateEstimated: true, platform: 'YT Shorts', title: 'Shacman Hybrid! Hemat BBM 25%', pillar: BRAND, format: VID, unit: 'New Energy EV/NG', views: 770, metricsPartial: true, notes: 'Durasi 0:22; tanggal tayang tidak ada di CSV (diisi akhir periode 31 Okt)' })
  ];
}

const INITIAL_BACKUP_DATA = {"selectedMonth": "ALL", "planView": "week", "selectedPlatformFilter": "Facebook Page", "dataVersion": 4, "kpiInputs": {"brand": 100, "visual": 25, "report": 1}, "kpiSettings": {"cap": 120, "erIncludeClicks": true, "contentMode": "unique", "retentionSource": "youtube", "startMonth": "2026-09", "months": 2}, "monthly": {"2026-08": {"followers": {"LinkedIn Page": 46, "TikTok": 5, "YouTube": 0}, "reach": {"LinkedIn Page": 433}, "teamwork": null, "reportDone": false}, "2026-09": {"followers": {"LinkedIn Page": 154, "TikTok": 50, "YouTube": 0}, "reach": {"LinkedIn Page": 2488, "YouTube": 11}, "teamwork": null, "reportDone": false}, "2026-10": {"followers": {"LinkedIn Page": 280, "TikTok": 194, "YouTube": 4, "Facebook Page": 5, "Instagram": 30}, "reach": {"LinkedIn Page": 3009, "YouTube": 4084}, "teamwork": 300, "reportDone": true}}, "leads": [{"id": "lead-1793853939503", "date": "2026-10-02", "name": "Muhammad Zulfiqar", "source": "Email", "contact": "muhammad.zulfiqar@ptssb.co.id", "purpose": "develop 20KL Water Tank dengan menggunakan unit Shacman. Namun saya terkendala dengan mencari tipe truck yang sesuai dengan kebutuhan", "followUp": "diteruskan ke bu Lani", "qualified": true, "company": "PT. Sanggar Sarana Baja"}, {"id": "lead-1793859801181", "date": "2026-10-01", "name": "Markus Kende Tonapa", "source": "Email", "company": "PT.MANGGALA KHARISMA TAMA", "contact": "markuskt@indo.net.id", "purpose": "menanyakan harga dan stock sparepart", "followUp": "diteruskan ke bu lani", "qualified": true}, {"id": "lead-1793859967629", "date": "2026-10-01", "name": "Sania Umbas", "source": "Email", "company": "PT. Inti Guna Mitra Sentosa", "contact": "sales@intigunamintrasentosa.com", "purpose": "menayakan harga sparepart: shaft PTO F3000 Engine LZGJLDR47RX035334", "followUp": "diteruskan ke bu lani", "qualified": true}, {"id": "lead-1793860066973", "date": "2026-10-01", "name": "Li Chang", "source": "Instagram", "company": "", "contact": "iclang1987@gmail.com", "purpose": "menyakan penawaran harga unit:\nTractor Head SHACMAN 4x2 (Diesel)\nTractor Head SHACMAN 6x4 (Diesel)", "followUp": "diteruskan ke bu lani", "qualified": true}, {"id": "lead-1793860369317", "date": "2026-10-05", "name": "jimmi patana", "source": "TikTok", "company": "", "contact": "@mr..jiputra/jimmi.patana@gmail.com", "purpose": "menanyakan informasi direct payment", "followUp": "diteruskan ke bu lani", "qualified": true}, {"id": "lead-1793860449629", "date": "2026-10-18", "name": "mitra trukindo perkasa", "source": "TikTok", "company": "", "contact": "@mitratrukindoperkasa", "purpose": "menanyakan kerjasama untuk penjualan unit shacman", "followUp": "diteruskan ke bu lani", "qualified": true}, {"id": "lead-1793860538317", "date": "2026-10-24", "name": "andi faishal", "source": "TikTok", "company": "", "contact": "@ig.sugar_dadyy28", "purpose": "menanyakan ketersediaan unit DT 12 roda", "followUp": "diteruskan ke bu lani", "qualified": false}], "followers": {"Instagram": {"current": 30, "growth": 0}, "TikTok": {"current": 194, "growth": 189}, "LinkedIn Page": {"current": 280, "growth": 234}, "Facebook Page": {"current": 5, "growth": 4}, "Threads": {"current": 0, "growth": 0}, "YouTube": {"current": 4, "growth": 2}, "YT Shorts": {"current": 0, "growth": 2}}, "channelStats": {"LinkedIn Page": {"views": 12106, "viewsLabel": "impressions", "reach": 5098, "engagement": 215, "clicks": 1929, "er": 1.78, "posts": 23, "note": "100% organik (0 sponsored). Klik termasuk geser carousel."}, "TikTok": {"views": 47898, "viewsLabel": "views video", "reach": 29300, "engagement": 1594, "posts": 19, "note": "19 video (17 Sep\u201330 Okt). Reach = total viewers \u00b129,3K (hampir semua baru); jam aktif puncak 06.00."}, "Instagram": {"views": 6218, "viewsLabel": "tayangan", "reach": 2600, "engagement": 213, "posts": 28, "stories": 27, "note": "385 kunjungan profil, 36 ketukan bio; 77% tayangan dari non-pengikut. Pengikut baru n/a."}, "Facebook Page": {"views": 1673, "viewsLabel": "tayangan", "reach": 1333, "engagement": 21, "posts": 27, "stories": 32, "note": "Reels \u00c2\u00b191% tayangan; 123 kunjungan halaman; 0 klik tautan."}, "Threads": {"views": null, "reach": null, "engagement": null, "posts": null, "note": "Tidak ada data di CSV."}, "YouTube": {"views": 175, "viewsLabel": "views video panjang", "reach": 2400, "engagement": null, "posts": 6, "note": "CTR thumbnail 8,3%; rata-rata tonton 0:44. Audiens bulanan \u00c2\u00b12,4K & watch time 17,2 jam (seluruh channel)."}, "YT Shorts": {"views": 5134, "viewsLabel": "views", "reach": null, "engagement": 40, "posts": 3, "note": "2.339 engaged views; 40 like; 0 share."}}, "reportNotes": {"highlight": "1. LinkedIn tumbuh paling konsisten: followers bersih +108 (Sep) \u00e2\u2020\u2019 +126 (Okt), total 280 per 2 Nov. Impressions naik 4.939 \u00e2\u2020\u2019 7.167 (+45%).\n2. Posting lowongan mendominasi impressions LinkedIn (teratas: rekrutmen after-sales 3.104 impressions, 70 reaksi).\n3. TikTok menjadi mesin jangkauan: \u00c2\u00b129,3K viewers, +144 followers di Oktober. Video \"Tanjakan\" (\u00c2\u00b115K views, 109 komentar) teratas.\n4. Pertambahan followers LinkedIn + TikTok naik 76,5% (153 \u00e2\u2020\u2019 270).", "strategy": "1. Konten produk LinkedIn (H3000S, X5000, F3000, X3000) masih 150\u00e2\u20ac\u201c300 impressions per posting \u00e2\u20ac\u201d uji format carousel spesifikasi.\n2. Repurpose video TikTok teratas ke Reels & Shorts (video Hybrid: 8.043 views di TikTok vs 276 IG & 247 FB).\n3. Instagram belum 100 pengikut (demografi belum tersedia) \u00e2\u20ac\u201d konversi 385 kunjungan profil menjadi pengikut.\n4. Aktifkan wawasan Cerita Facebook; mulai catat data Threads.\n(Catatan ini dibuat otomatis dari CSV \u00e2\u20ac\u201d silakan edit.)"}, "plans": [{"id": "plan-1793848518601", "date": "2026-11-09", "status": "Draft / Brief", "title": "Siapa bilang shacman susah dioperasikan", "pillar": "Education & Engagement", "platforms": ["Instagram", "TikTok", "LinkedIn Page", "Facebook Page", "YouTube", "YT Shorts"], "format": "Short Video (Reels/TikTok/Shorts)", "pic": "akmal", "brief": "siapa bilang truck shacman susah dioperasikan, ini buktinya cewe aja bisa kok bawa shacman di medan tambang. "}, {"id": "plan-1793852084799", "date": "2026-11-04", "status": "Published", "title": "angkut berat nol emisi gas buang", "pillar": "Product Introduction", "platforms": ["Instagram", "TikTok", "LinkedIn Page", "Facebook Page", "YT Shorts"], "format": "Short Video (Reels/TikTok/Shorts)", "pic": "", "brief": "", "captions": {"igfb": "Muatan penuh. Medan berat. Rit tetap jalan. \ud83d\ude9b\n\u2705 Bak lega, muatan bisa maksimal\n\u2705 Rangka dan as kokoh, siap beban berat\n\u2705 Tenaga besar, tanjakan jadi biasa\nDi mana medan paling berat yang pernah kamu lewati ? Tulis di komentar \ud83d\udc47\n#shacman #shacmanindonesia #shacmate #truckingmadebetter #truktambang #dumptruck #trukberat #trukindonesia ", "linkedin": "Fully loaded. Rough terrain. Still moving.\n\n\u2022 A spacious cargo body, to carry a full load each trip\n\u2022 A reinforced frame and axles, built for heavy loads\n\u2022 Strong engine power, to keep climbing grades under load\n\nFor operations measured by cost per tonne, a fuller load on every trip matters.\n\nPlanning your next fleet? Email us at shacman@shacmanindonesia.id.\n\nTrucking Made Better.\n\n#Shacman #ShacmanIndonesia #DumpTruck #HeavyDutyTrucks #MiningLogistics #TruckingMadeBetter", "tiktok": "Fully loaded. Rough terrain. Still moving.\n\n\u2022 A spacious cargo body, to carry a full load each trip\n\u2022 A reinforced frame and axles, built for heavy loads\n\u2022 Strong engine power, to keep climbing grades under load\n\nFor operations measured by cost per tonne, a fuller load on every trip matters.\n\nPlanning your next fleet? Email us at shacman@shacmanindonesia.id.\n\nTrucking Made Better.\n\n#Shacman #ShacmanIndonesia #DumpTruck #HeavyDutyTrucks #MiningLogistics #TruckingMadeBetter", "ytsTitle": "Debu, Lumpur, Tanjakan: Truk Shacman di TambangFinal", "ytsDesc": "Debu, lumpur, sampai tanjakan. Truk Shacman tetap jalan dengan muatan penuh. \ud83d\ude9b\n\nTiga hal yang kami andalkan di jalan tambang:\n\u2705 Bak lega, muatan bisa maksimal\n\u2705 Rangka dan as kokoh, siap beban berat\n\u2705 Tenaga besar, tanjakan jadi biasa\n\nMedan paling berat yang pernah kamu lewati bareng truk, di mana? Tulis di komentar \ud83d\udc47\n\n\ud83d\udcde 021 38865433\n\ud83d\udce7 shacman@shacmanindonesia.id\n\ud83c\udf10 shacmanindonesia.com\n\ud83d\udccd @shacmanid_official\n\n#shacman  #ShacmanIndonesia #truktambang  #dumptruck  #shorts"}, "fbSeparate": false, "assets": []}, {"id": "plan-1793862881181", "date": "2026-11-04", "status": "Published", "title": "Polos begini aja udah gagah. \ud83d\udfe1", "pillar": "Product Introduction", "platforms": ["Threads"], "format": "Thread / Artikel B2B", "pic": "", "brief": "Polos begini aja udah gagah. \ud83d\udfe1", "captions": {}, "fbSeparate": false, "assets": [], "threads": {"topic": "logistik", "posts": [{"text": "Polos begini aja udah gagah. \ud83d\udfe1\nH3000S 6\u00d74, tampil tanpa bak, siap dibentuk sesuai kerjaanmu: tractor, cargo, dump, atau mixer.\nKalau kamu yang milih, jadi apa nih?\n#Shacman", "attachType": "photo", "attachCount": 1, "assets": []}]}}], "ideas": [{"id": "idea-1793848625432", "title": "stop buang-buang duit", "hook": "stop buang-buang duit, unit truck itu buat kerja bukan ngerjain. ", "pillar": "Product Introduction", "priority": "High", "notes": "gunakan video on the road. head truck. "}], "posts": [{"reach": 0, "clicks": 67, "ctr": 7.02, "likes": 10, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "Di luar periode laporan (Agustus)", "link": "", "metricsPartial": false, "id": "li-01", "date": "2026-08-21", "platform": "LinkedIn Page", "title": "\u00f0\u0178\u0161\u00a8 WE ARE HIRING \u00e2\u20ac\u201d SALES SUPERVISOR \u00f0\u0178\u0161\u00a8 Location : East Jakarta What we\u00e2\u20ac\u2122re looking for: \u00e2\u0153\u2026...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 954, "unit": "Umum / Non-produk", "grp": "hire_sales_supervisor"}, {"reach": 0, "clicks": 24, "ctr": 9.45, "likes": 5, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Di luar periode laporan (Agustus)", "link": "", "metricsPartial": false, "id": "li-02", "date": "2026-08-31", "platform": "LinkedIn Page", "title": "SHACMAN AT MINING INDONESIA 2026! Join us and discover the latest heavy-duty trucks, sp...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 254, "unit": "Umum / Non-produk", "grp": "mining_expo_promo"}, {"reach": 0, "clicks": 644, "ctr": 89.82, "likes": 7, "comments": 0, "shares": 2, "interactions": 0, "newFollowers": 0, "notes": "Klik termasuk geser halaman carousel", "link": "", "metricsPartial": false, "id": "li-03", "date": "2026-09-16", "platform": "LinkedIn Page", "title": "We are proud to participate in the Indonesia Mining Expo 2026, bringing you the innovat...", "pillar": "Branding & Corporate", "format": "carousel dokumen", "views": 717, "unit": "Umum / Non-produk", "grp": "mining_expo"}, {"reach": 0, "clicks": 252, "ctr": 8.12, "likes": 70, "comments": 5, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-04", "date": "2026-09-17", "platform": "LinkedIn Page", "title": "PT Shacman Motors Indonesia is currently expanding our exceptional after-sales service...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 3104, "unit": "Umum / Non-produk", "grp": "hire_technician"}, {"reach": 0, "clicks": 2, "ctr": 1.07, "likes": 1, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-05", "date": "2026-09-21", "platform": "LinkedIn Page", "title": "From rugged off-road terrains to bustling industrial hubs, our diverse fleet is enginee...", "pillar": "Product Introduction", "format": "video", "views": 187, "unit": "Umum / Non-produk", "grp": "apapun_medannya"}, {"reach": 0, "clicks": 15, "ctr": 4.79, "likes": 9, "comments": 1, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "Judul terpotong di CSV (\"H30...\"); seri diasumsikan H3000S \u00e2\u20ac\u201d mohon cek", "link": "", "metricsPartial": false, "id": "li-06", "date": "2026-09-22", "platform": "LinkedIn Page", "title": "At SHACMAN, we understand that time is money in the logistics industry. The SHACMAN H30...", "pillar": "Product Introduction", "format": "video", "views": 313, "unit": "H3000S", "grp": "h3000s_time_is_money"}, {"reach": 0, "clicks": 3, "ctr": 1.22, "likes": 6, "comments": 0, "shares": 2, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-07", "date": "2026-09-24", "platform": "LinkedIn Page", "title": "Ready to load, built to deliver. \u00f0\u0178\u0161\u203a\u00f0\u0178\u2019\u00a5 Maximize your payload and site productivity with SH...", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 245, "unit": "Belum diidentifikasi", "grp": "kapasitas_besar"}, {"reach": 0, "clicks": 9, "ctr": 4.97, "likes": 4, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-08", "date": "2026-09-25", "platform": "LinkedIn Page", "title": "Mari pererat tali persaudaraan di momen yang istimewa ini. Segenap keluarga besar SHACM...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 181, "unit": "Umum / Non-produk", "grp": "mooncake"}, {"reach": 0, "clicks": 5, "ctr": 2.62, "likes": 2, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-09", "date": "2026-09-29", "platform": "LinkedIn Page", "title": "Take a closer look at the SHACMAN H3000S in our latest walkaround. Designed with the ph...", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 191, "unit": "H3000S", "grp": "walkaround_sep", "brandOk": true}, {"reach": 0, "clicks": 3, "ctr": 1.05, "likes": 6, "comments": 0, "shares": 2, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-10", "date": "2026-10-02", "platform": "LinkedIn Page", "title": "Take a closer look at the SHACMAN H3000S Tractor Head 6x4 where power meets precision....", "pillar": "Product Introduction", "format": "video", "views": 285, "unit": "H3000S", "grp": "h3000s_intip", "brandOk": true}, {"reach": 0, "clicks": 4, "ctr": 1.32, "likes": 3, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-11", "date": "2026-10-05", "platform": "LinkedIn Page", "title": "Introducing the SHACMAN X5000 Tractor Head 6x4, engineered for heavy-duty logistics ope...", "pillar": "Product Introduction", "format": "video", "views": 302, "unit": "X5000", "grp": "x5000", "brandOk": true}, {"reach": 0, "clicks": 6, "ctr": 2.73, "likes": 6, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "Membahas H3000S & L3000", "link": "", "metricsPartial": false, "id": "li-12", "date": "2026-10-09", "platform": "LinkedIn Page", "title": "Built for on-road operations in Indonesia. The SHACMAN H3000S and L3000 are on-road pla...", "pillar": "Product Introduction", "format": "video", "views": 220, "unit": "H3000S", "grp": "h3000s_l3000", "brandOk": true}, {"reach": 0, "clicks": 196, "ctr": 82.01, "likes": 1, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "Klik termasuk geser halaman carousel", "link": "", "metricsPartial": false, "id": "li-13", "date": "2026-10-13", "platform": "LinkedIn Page", "title": "SHACMAN H3000S Tractor Head: built for combined loads of up to 70 tonnes. Key specifica...", "pillar": "Product Introduction", "format": "carousel dokumen", "views": 239, "unit": "H3000S", "grp": "h3000s_carousel", "brandOk": true}, {"reach": 0, "clicks": 4, "ctr": 1.64, "likes": 2, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-14", "date": "2026-10-15", "platform": "LinkedIn Page", "title": "From dusty roads to fully loaded hauls, every journey has a story. And in every story,...", "pillar": "Customer & Field Activities", "format": "video", "views": 244, "unit": "Belum diidentifikasi", "grp": "jalan_berdebu", "brandOk": true}, {"reach": 0, "clicks": 2, "ctr": 0.83, "likes": 4, "comments": 0, "shares": 2, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-15", "date": "2026-10-20", "platform": "LinkedIn Page", "title": "Extreme terrain? Built to handle it. The SHACMAN F3000 8x4 dump truck is engineered for...", "pillar": "Product Introduction", "format": "video", "views": 241, "unit": "F3000", "grp": "f3000", "brandOk": true}, {"reach": 0, "clicks": 1, "ctr": 0.54, "likes": 1, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-16", "date": "2026-10-21", "platform": "LinkedIn Page", "title": "A tractor head earns only while it is moving. We engineered the H3000S around three thi...", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 186, "unit": "H3000S", "grp": "tractor_earns", "brandOk": true}, {"reach": 0, "clicks": 3, "ctr": 1.96, "likes": 3, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-17", "date": "2026-10-22", "platform": "LinkedIn Page", "title": "Heavy loads, tight schedules. The SHACMAN X3000 is ready to roll. For fleet managers, o...", "pillar": "Product Introduction", "format": "video", "views": 153, "unit": "X3000", "grp": "x3000_merah", "brandOk": true}, {"reach": 0, "clicks": 5, "ctr": 3.01, "likes": 4, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-18", "date": "2026-10-23", "platform": "LinkedIn Page", "title": "Driving Global Logistics Forward: Inside SHACMAN GlobeFest 2026 The commercial vehicle...", "pillar": "Branding & Corporate", "format": "video", "views": 166, "unit": "Umum / Non-produk", "grp": "next_move", "brandOk": true}, {"reach": 0, "clicks": 610, "ctr": 35.57, "likes": 21, "comments": 0, "shares": 2, "interactions": 0, "newFollowers": 0, "notes": "Klik termasuk geser halaman carousel", "link": "", "metricsPartial": false, "id": "li-19", "date": "2026-10-26", "platform": "LinkedIn Page", "title": "We are expanding! PT Shacman Motors Indonesia is looking for driven Sales Staff to join...", "pillar": "Branding & Corporate", "format": "carousel dokumen", "views": 1715, "unit": "Umum / Non-produk", "grp": "hire_sales_staff", "brandOk": true}, {"reach": 0, "clicks": 1, "ctr": 0.48, "likes": 2, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-20", "date": "2026-10-26", "platform": "LinkedIn Page", "title": "When Childhood Dreams Become Heavy-Duty Reality We all started with a simple dream. Wha...", "pillar": "Trend Jacking", "format": "video", "views": 210, "unit": "X3000", "grp": "toys", "brandOk": true}, {"reach": 0, "clicks": 4, "ctr": 1.61, "likes": 7, "comments": 0, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-21", "date": "2026-10-27", "platform": "LinkedIn Page", "title": "Maximizing fleet efficiency requires balancing maneuverability in tight routes with hea...", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 248, "unit": "Belum diidentifikasi", "grp": "lincah", "brandOk": true}, {"reach": 0, "clicks": 5, "ctr": 3.57, "likes": 2, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-22", "date": "2026-10-28", "platform": "LinkedIn Page", "title": "Happy Youth Pledge Day 2026 Today, we commemorate the 1928 Youth Pledge, a historic mil...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 140, "unit": "Umum / Non-produk", "grp": "sumpah_pemuda", "brandOk": true}, {"reach": 0, "clicks": 52, "ctr": 4.06, "likes": 23, "comments": 1, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-23", "date": "2026-10-30", "platform": "LinkedIn Page", "title": "Hiring in Semarang: Sales Staff, PT Shacman Motors Indonesia We are looking for a Sales...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 1282, "unit": "Umum / Non-produk", "grp": "hire_semarang", "brandOk": true}, {"reach": 0, "clicks": 63, "ctr": 6.23, "likes": 22, "comments": 1, "shares": 1, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-24", "date": "2026-10-30", "platform": "LinkedIn Page", "title": "Hiring: Vehicle Registration & Certification Specialist, Jakarta Timur Every truck we d...", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 1012, "unit": "Umum / Non-produk", "grp": "hire_vrc_okt", "brandOk": true}, {"reach": 0, "clicks": 5, "ctr": 3.03, "likes": 3, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "", "metricsPartial": false, "id": "li-25", "date": "2026-10-30", "platform": "LinkedIn Page", "title": "More trips, less drama: the SHACMAN H3000S 6x4 Tractor Head. Built for on-road operatio...", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 165, "unit": "H3000S", "grp": "h3000s_poster", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=E1s9szMdLyw", "metricsPartial": true, "id": "yt-E1s9szMdLyw", "date": "2026-09-01", "platform": "YouTube", "title": "We are SHACMAN SHACMAN Corporate Video", "pillar": "Branding & Corporate", "format": "Long Video", "views": 8, "unit": "Umum / Non-produk", "grp": "corporate_video", "durationS": 347, "engagedViews": 6, "retentionPct": 52.3}, {"reach": 5, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid05MhmqGQMCe1seCCtb2fFUxWGs3wVPgEumiVoFHtApKXPed5KWofxUgQqm5FpM5D9l", "metricsPartial": false, "id": "fb-61465004", "date": "2026-09-16", "platform": "Facebook Page", "title": "PT Shacman Motors Indonesia sedang membuka kesempatan karir untuk posisi TECHNICIAN. Kami mencari individu ya\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 9, "unit": "Umum / Non-produk", "grp": "hire_technician", "durationS": 0}, {"reach": 5, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid0p7D7bQGP4o7ep7wxMQkGjMrA3vsUEQKgY9g1Z3DEHt1ZTatgrnAaorNNuQiLU1kSl", "metricsPartial": false, "id": "fb-69465004", "date": "2026-09-16", "platform": "Facebook Page", "title": "We are proud to participate in the Indonesia Mining Expo 2026, bringing you the innovation and relentless dur\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 26, "unit": "Umum / Non-produk", "grp": "mining_expo", "durationS": 0}, {"reach": 55, "clicks": 0, "ctr": 0, "likes": 7, "comments": 0, "shares": 0, "interactions": 7, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DdWG-TOH049/", "metricsPartial": false, "id": "ig-22675600", "date": "2026-09-16", "platform": "Instagram", "title": "We are proud to participate in the Indonesia Mining Expo 2026, bringing you the innovation and relentless dur\u2026", "pillar": "Branding & Corporate", "format": "carousel dokumen", "views": 173, "saves": 0, "unit": "Umum / Non-produk", "grp": "mining_expo", "durationS": 0}, {"reach": 50, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 1, "notes": "", "link": "https://www.instagram.com/p/DdYAveRHx-P/", "metricsPartial": false, "id": "ig-01571666", "date": "2026-09-16", "platform": "Instagram", "title": "Saat ini kami sedang mencari Technician berpengalaman untuk menjaga performa armada kami tetap optimal! \ud83d\ude9b\ud83d\udca8 Ap\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 125, "saves": 0, "unit": "Umum / Non-produk", "grp": "hire_technician", "durationS": 0}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 122, "comments": 3, "shares": 14, "interactions": 139, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7686361027692449032", "metricsPartial": false, "id": "tt-92449032", "date": "2026-09-17", "platform": "TikTok", "title": "Woi para suhu mesin dan mekanik andalan! Shacman lagi buka lowongan nih buat posisi Technician. Buat kalian y\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 4293, "unit": "Umum / Non-produk", "grp": "hire_technician"}, {"reach": 207, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1549899559765617/", "metricsPartial": false, "id": "fb-99465004", "date": "2026-09-21", "platform": "Facebook Page", "title": "Apapun medannya, cuacanya, atau muatannya, SHACMAN selalu siap gaspol! \ud83d\udca8\ud83d\ude9b Mulai dari jalanan aspal, area tamb\u2026", "pillar": "Product Introduction", "format": "video", "views": 219, "unit": "Umum / Non-produk", "grp": "apapun_medannya", "durationS": 13, "avgWatchS": 3.11, "retentionPct": 23.9}, {"reach": 333, "clicks": 0, "ctr": 0, "likes": 26, "comments": 2, "shares": 0, "interactions": 28, "newFollowers": 3, "notes": "", "link": "https://www.instagram.com/reel/Ddk8f5Ms6k5/", "metricsPartial": false, "id": "ig-56592561", "date": "2026-09-21", "platform": "Instagram", "title": "Jalan terus, pantang mundur! Siapa nih yang sering ketemu jagoan merah ini di jalan? \ud83d\udd25\ud83d\ude9b Kenalin, SHACMAN H300\u2026", "pillar": "Education & Engagement", "format": "video", "views": 407, "saves": 0, "unit": "Belum diidentifikasi", "grp": "jalan_terus", "durationS": 37}, {"reach": 179, "clicks": 0, "ctr": 0, "likes": 5, "comments": 0, "shares": 0, "interactions": 5, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/Ddi8s8Uhv2L/", "metricsPartial": false, "id": "ig-12155063", "date": "2026-09-21", "platform": "Instagram", "title": "Apapun medannya, cuacanya, atau muatannya, SHACMAN selalu siap gaspol! \ud83d\udca8\ud83d\ude9b Mulai dari jalanan aspal, area tamb\u2026", "pillar": "Product Introduction", "format": "video", "views": 214, "saves": 0, "unit": "Umum / Non-produk", "grp": "apapun_medannya", "durationS": 12}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 8, "comments": 0, "shares": 0, "interactions": 8, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7687934348539989268", "metricsPartial": false, "id": "tt-39989268", "date": "2026-09-21", "platform": "TikTok", "title": "Apapun medannya, cuacanya, atau muatannya, SHACMAN selalu siap gaspol! \ud83d\udca8\ud83d\ude9b Mulai dari jalanan aspal, area tamb\u2026", "pillar": "Product Introduction", "format": "video", "views": 411, "unit": "Umum / Non-produk", "grp": "apapun_medannya"}, {"reach": 5, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1756093752312522/", "metricsPartial": false, "id": "fb-77465004", "date": "2026-09-22", "platform": "Facebook Page", "title": "Love this trend. #Shacman #ShacmanH3000S #TractorHead #TrukIndonesia #AlatBerat #Otomotif #LogistikIndonesia\u2026", "pillar": "Trend Jacking", "format": "video", "views": 8, "unit": "H3000S", "grp": "love_trend", "durationS": 23, "avgWatchS": 3.7, "retentionPct": 16.1}, {"reach": 248, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/2146332499612077/", "metricsPartial": false, "id": "fb-81465004", "date": "2026-09-22", "platform": "Facebook Page", "title": "Jalan terus, pantang mundur! Siapa nih yang sering ketemu jagoan merah ini di jalan? \ud83d\udd25\ud83d\ude9b Kenalin, SHACMAN H300\u2026", "pillar": "Education & Engagement", "format": "video", "views": 274, "unit": "Belum diidentifikasi", "grp": "jalan_terus", "durationS": 38, "avgWatchS": 4.09, "retentionPct": 10.8}, {"reach": 1115, "clicks": 0, "ctr": 0, "likes": 42, "comments": 0, "shares": 0, "interactions": 46, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/DdneqZKvIjD/", "metricsPartial": false, "id": "ig-08206516", "date": "2026-09-22", "platform": "Instagram", "title": "Love this trend. #shacman #shacmanh3000s #tractorhead #trukindonesia #alatberat #otomotif #logistikindonesia\u2026", "pillar": "Trend Jacking", "format": "video", "views": 1255, "saves": 4, "unit": "H3000S", "grp": "love_trend", "durationS": 22}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 48, "comments": 0, "shares": 6, "interactions": 54, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7688220642293959957", "metricsPartial": false, "id": "tt-93959957", "date": "2026-09-22", "platform": "TikTok", "title": "Jalan terus, pantang mundur! Siapa nih yang sering ketemu jagoan merah ini di jalan? \ud83d\udd25\ud83d\ude9b Kenalin, SHACMAN H300\u2026", "pillar": "Education & Engagement", "format": "video", "views": 1023, "unit": "Belum diidentifikasi", "grp": "jalan_terus"}, {"reach": 50, "clicks": 0, "ctr": 0, "likes": 3, "comments": 0, "shares": 0, "interactions": 3, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DdqE97mHyaR/", "metricsPartial": false, "id": "ig-42646594", "date": "2026-09-23", "platform": "Instagram", "title": "WE ARE HIRING!!! Vehicle Registration & Certification Specialist \ud83d\ude9b PT Shacman Motors Indonesia is looking for\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 95, "saves": 0, "unit": "Umum / Non-produk", "grp": "hire_vrc_sep", "durationS": 0}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 12, "comments": 0, "shares": 1, "interactions": 13, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7688585552798534932", "metricsPartial": false, "id": "tt-98534932", "date": "2026-09-23", "platform": "TikTok", "title": "Love this trend. #Shacman #ShacmanH3000S #TractorHead #TrukIndonesia #AlatBerat #Otomotif #LogistikIndonesia\u2026", "pillar": "Trend Jacking", "format": "video", "views": 589, "unit": "H3000S", "grp": "love_trend"}, {"reach": 6, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid08uTMbrgeQweRWfLdBuJQPNjcP9shnYdJg4ukqXEV4owqsRWSZ1NbVZ5S38gGeWgxl", "metricsPartial": false, "id": "fb-39465004", "date": "2026-09-24", "platform": "Facebook Page", "title": "Kapasitas besar, siap angkut muatan hari ini! \ud83d\udd25\ud83d\ude9a Dump Truck SHACMAN yang ekstra lega dan kokoh ini siap menam\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 17, "unit": "Belum diidentifikasi", "grp": "kapasitas_besar", "durationS": 0}, {"reach": 5, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid0VA1XfYrm2ZCoqBfPL1bLEU3GK3gDNxa1H6hRQq4WUiMPoz2ybkk619RbJzTDd6wsl", "metricsPartial": false, "id": "fb-19465004", "date": "2026-09-24", "platform": "Facebook Page", "title": "WE ARE HIRING!!! Vehicle Registration & Certification Specialist \ud83d\ude9b PT Shacman Motors Indonesia is looking for\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 12, "unit": "Umum / Non-produk", "grp": "hire_vrc_sep", "durationS": 0}, {"reach": 46, "clicks": 0, "ctr": 0, "likes": 3, "comments": 0, "shares": 0, "interactions": 3, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DdqY-Vnnyqx/", "metricsPartial": false, "id": "ig-05335905", "date": "2026-09-24", "platform": "Instagram", "title": "Kapasitas besar, siap angkut muatan hari ini! \ud83d\udd25\ud83d\ude9a Dump Truck SHACMAN yang ekstra lega dan kokoh ini siap menam\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 82, "saves": 0, "unit": "Belum diidentifikasi", "grp": "kapasitas_besar", "durationS": 0}, {"reach": 8, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid02xxpktZXPbYRg8ZLMd2RcCTqVAdoBhNM5JiLxUzkg7bSpkXiJMwz4Y1QRdoFdvR2Vl", "metricsPartial": false, "id": "fb-81465004", "date": "2026-09-25", "platform": "Facebook Page", "title": "Selamat merayakan Mooncake Festival 2026! \ud83e\udd6e\ud83c\udf15 Sambil kumpul santai, varian kue bulan apa nih yang jadi favorit\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 15, "unit": "Umum / Non-produk", "grp": "mooncake", "durationS": 0}, {"reach": 43, "clicks": 0, "ctr": 0, "likes": 3, "comments": 0, "shares": 0, "interactions": 4, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/Dds6dWfH0NR/", "metricsPartial": false, "id": "ig-11789509", "date": "2026-09-25", "platform": "Instagram", "title": "Selamat merayakan Mooncake Festival 2026! \ud83e\udd6e\ud83c\udf15 Sambil kumpul santai, varian kue bulan apa nih yang jadi favorit\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 81, "saves": 1, "unit": "Umum / Non-produk", "grp": "mooncake", "durationS": 0}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 1, "notes": "Sumber: FYP 52,7%, profil 40,6%, pencarian 5,2%; viewer baru 67%; bukan follower 89%", "link": "", "metricsPartial": false, "id": "tt-mooncake", "date": "2026-09-25", "platform": "TikTok", "title": "Selamat merayakan Mooncake Festival 2026! \ud83e\udd6e Sambil kumpul santai, vari\u2026 (judul terpotong di screenshot)", "pillar": "Branding & Corporate", "format": "video", "views": 330, "unit": "Umum / Non-produk", "grp": "mooncake", "saves": 0, "avgWatchS": 3.37, "watchedFullPct": 26.4, "viewersTotal": 314}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=sEBDpS6Fe-M", "metricsPartial": true, "id": "yt-sEBDpS6Fe-M", "date": "2026-09-29", "platform": "YouTube", "title": "SHACMAN H3000S Walkaround: Exploring Interior Comfort & Dependable Drivetrain", "pillar": "Product Introduction", "format": "Long Video", "views": 30, "unit": "H3000S", "grp": "walkaround_sep", "durationS": 65, "engagedViews": 18, "retentionPct": 51.4}, {"reach": 224, "clicks": 0, "ctr": 0, "likes": 6, "comments": 0, "shares": 0, "interactions": 7, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/Dd8iuRNBDWa/", "metricsPartial": false, "id": "ig-51302396", "date": "2026-10-01", "platform": "Instagram", "title": "Yuk intip lebih dekat SHACMAN H300S tractor head ini! Mulai dari tampang depannya yang aerodinamis dan gagah,\u2026", "pillar": "Product Introduction", "format": "video", "views": 261, "saves": 1, "unit": "H3000S", "grp": "h3000s_intip", "durationS": 75, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 18, "comments": 0, "shares": 2, "interactions": 20, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7691624997273586965", "metricsPartial": false, "id": "tt-73586965", "date": "2026-10-01", "platform": "TikTok", "title": "Yuk intip lebih dekat SHACMAN H3000S tractor head ini! Mulai dari tampang depannya yang aerodinamis dan gagah\u2026", "pillar": "Product Introduction", "format": "video", "views": 978, "unit": "H3000S", "grp": "h3000s_intip", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1637759404431778/", "metricsPartial": false, "id": "fb-33465004", "date": "2026-10-02", "platform": "Facebook Page", "title": "Kenalin, SHACMAN Hybrid nih, bos! \ud83d\udd25\ud83d\ude9b Solusi efisiensi buat bisnis kamu. \u2705 Hemat konsumsi bahan bakar (fuel) s\u2026", "pillar": "Product Introduction", "format": "video", "views": 247, "unit": "New Energy EV/NG", "grp": "hybrid", "durationS": 22, "avgWatchS": 6.98, "retentionPct": 31.7, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/999166379887652/", "metricsPartial": false, "id": "fb-81465004", "date": "2026-10-02", "platform": "Facebook Page", "title": "Yuk intip lebih dekat SHACMAN H300S tractor head ini! Mulai dari tampang depannya yang aerodinamis dan gagah,\u2026", "pillar": "Product Introduction", "format": "video", "views": 11, "unit": "H3000S", "grp": "h3000s_intip", "durationS": 76, "avgWatchS": 1.41, "retentionPct": 1.9, "brandOk": true}, {"reach": 239, "clicks": 0, "ctr": 0, "likes": 6, "comments": 0, "shares": 0, "interactions": 6, "newFollowers": 1, "notes": "", "link": "https://www.instagram.com/reel/Dd_BARQv3C8/", "metricsPartial": false, "id": "ig-25631727", "date": "2026-10-02", "platform": "Instagram", "title": "Kenalin, SHACMAN Hybrid nih, bos! \ud83d\udd25\ud83d\ude9b Solusi efisiensi buat bisnis kamu. \u2705 Hemat konsumsi bahan bakar (fuel) s\u2026", "pillar": "Product Introduction", "format": "video", "views": 280, "saves": 0, "unit": "New Energy EV/NG", "grp": "hybrid", "durationS": 21, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 221, "comments": 14, "shares": 2, "interactions": 237, "newFollowers": 47, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7691984522954460437", "metricsPartial": false, "id": "tt-54460437", "date": "2026-10-02", "platform": "TikTok", "title": "SHACMAN Hybrid nih, bos! \ud83d\udd25\ud83d\ude9b Solusi efisiensi buat bisnis kamu. \u2705 Hemat konsumsi bahan bakar (fuel) sampai den\u2026", "pillar": "Product Introduction", "format": "video", "views": 8059, "unit": "New Energy EV/NG", "grp": "hybrid", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/4670167623216387/", "metricsPartial": false, "id": "fb-99465004", "date": "2026-10-04", "platform": "Facebook Page", "title": "Kenalin SHACMAN X5000 Tractor Head, jagoan buat angkutan logistik! \u2699\ufe0f Mesin Cummins ISZ480: 480 HP, torsi 2.3\u2026", "pillar": "Product Introduction", "format": "video", "views": 15, "unit": "X5000", "grp": "x5000", "durationS": 113, "avgWatchS": 8.22, "retentionPct": 7.3, "brandOk": true}, {"reach": 46, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/DeGO2KPxgKq/", "metricsPartial": false, "id": "ig-12555591", "date": "2026-10-04", "platform": "Instagram", "title": "Kenalin SHACMAN X5000 Tractor Head, jagoan buat angkutan logistik! \u2699\ufe0f Mesin Cummins ISZ480: 480 HP, torsi 2.3\u2026", "pillar": "Product Introduction", "format": "video", "views": 72, "saves": 0, "unit": "X5000", "grp": "x5000", "durationS": 112, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 10, "comments": 0, "shares": 1, "interactions": 11, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7693019218547346708", "metricsPartial": false, "id": "tt-47346708", "date": "2026-10-05", "platform": "TikTok", "title": "Kenalin SHACMAN X5000 Tractor Head, jagoan buat angkutan logistik! \u2699\ufe0f Mesin Cummins ISZ480: 480 HP, torsi 2.3\u2026", "pillar": "Product Introduction", "format": "video", "views": 539, "unit": "X5000", "grp": "x5000", "brandOk": true}, {"reach": 147, "clicks": 0, "ctr": 0, "likes": 23, "comments": 0, "shares": 0, "interactions": 23, "newFollowers": 0, "notes": "Post kolaborasi (akun @fyd.photobus), caption menandai @ptsibasurya", "link": "https://www.instagram.com/p/DeMgug6P_yi/", "metricsPartial": false, "id": "ig-16076575", "date": "2026-10-07", "platform": "Instagram", "title": "From Shaanxi to Semarang \u2022 \u2022 @ptsibasurya @shacmanofficial X5000 420 \u2022 \u2022 #shacmantruck#shacman #truckspotter#\u2026", "pillar": "Customer & Field Activities", "format": "tanpa label video (gambar/teks)", "views": 264, "saves": 0, "unit": "Umum / Non-produk", "grp": "shaanxi_semarang", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1865825121453535/", "metricsPartial": false, "id": "fb-85465004", "date": "2026-10-08", "platform": "Facebook Page", "title": "Shacmate, kenalan sama H3000S dan L3000! \ud83d\ude9b Dua truk on-road yang tersedia dalam beberapa tipe: head truck, ca\u2026", "pillar": "Product Introduction", "format": "video", "views": 11, "unit": "H3000S", "grp": "h3000s_l3000", "durationS": 123, "avgWatchS": 2.52, "retentionPct": 2, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1341695389032981/", "metricsPartial": false, "id": "fb-31465004", "date": "2026-10-08", "platform": "Facebook Page", "title": "Tanjakan curam, tikungan tajam, jalan berkelok? Santai, Shacmate \ud83d\ude0e \ud83d\ude9b Kamu pernah lewat jalur kayak gini? Tuli\u2026", "pillar": "Customer & Field Activities", "format": "video", "views": 21, "unit": "Belum diidentifikasi", "grp": "tanjakan", "durationS": 31, "avgWatchS": 15.92, "retentionPct": 51.4, "brandOk": true}, {"reach": 151, "clicks": 0, "ctr": 0, "likes": 5, "comments": 0, "shares": 0, "interactions": 5, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/DeQeuRLBJeh/", "metricsPartial": false, "id": "ig-45134357", "date": "2026-10-08", "platform": "Instagram", "title": "Shacmate, kenalan sama H3000S dan L3000! \ud83d\ude9b Dua truk on-road yang tersedia dalam beberapa tipe: head truck, ca\u2026", "pillar": "Product Introduction", "format": "video", "views": 198, "saves": 0, "unit": "H3000S", "grp": "h3000s_l3000", "durationS": 122, "brandOk": true}, {"reach": 160, "clicks": 0, "ctr": 0, "likes": 5, "comments": 0, "shares": 0, "interactions": 5, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/DeRYTKBhziT/", "metricsPartial": false, "id": "ig-48131577", "date": "2026-10-09", "platform": "Instagram", "title": "Tanjakan curam, tikungan tajam, jalan berkelok? Santai, Shacmate \ud83d\ude0e \ud83d\ude9b Kamu pernah lewat jalur kayak gini? Tuli\u2026", "pillar": "Customer & Field Activities", "format": "video", "views": 223, "saves": 0, "unit": "Belum diidentifikasi", "grp": "tanjakan", "durationS": 30, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 514, "comments": 112, "shares": 1, "interactions": 627, "newFollowers": 27, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7694512767868603669", "metricsPartial": false, "id": "tt-68603669", "date": "2026-10-09", "platform": "TikTok", "title": "Tanjakan curam, tikungan tajam, jalan berkelok? Santai, Shacmate \ud83d\ude0e\ud83d\ude9b Kamu pernah lewat jalur kayak gini? Tulis\u2026", "pillar": "Customer & Field Activities", "format": "video", "views": 15405, "unit": "Belum diidentifikasi", "grp": "tanjakan", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 17, "comments": 0, "shares": 0, "interactions": 17, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7694497266203249972", "metricsPartial": false, "id": "tt-03249972", "date": "2026-10-09", "platform": "TikTok", "title": "Shacmate, kenalan sama H3000S dan L3000! \ud83d\ude9b Dua truk on-road yang tersedia dalam beberapa tipe: head truck, ca\u2026", "pillar": "Product Introduction", "format": "video", "views": 716, "unit": "H3000S", "grp": "h3000s_l3000", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=wvUXYPdYJik", "metricsPartial": true, "id": "yt-wvUXYPdYJik", "date": "2026-10-09", "platform": "YouTube", "title": "Built for on-road operations in Indonesia", "pillar": "Product Introduction", "format": "Long Video", "views": 3, "unit": "H3000S", "grp": "h3000s_l3000", "durationS": 123, "engagedViews": 2, "retentionPct": 50.5, "brandOk": true}, {"reach": 0, "clicks": 1, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid034qLj3F9aQor9va2snNvXM2xSiXtwyuSzK1rpd4JdVfo1JDni9ZA3mJoQE8ZqQXBAl", "metricsPartial": false, "id": "fb-49465004", "date": "2026-10-12", "platform": "Facebook Page", "title": "Shacmate, kenalan sama H3000S Tractor Head \ud83d\ude9b Geser untuk lihat isinya: \u25aa\ufe0f Tenaga 460 hp, siap tarik hingga 70\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 11, "unit": "H3000S", "grp": "h3000s_carousel", "durationS": 0, "brandOk": true}, {"reach": 37, "clicks": 0, "ctr": 0, "likes": 5, "comments": 0, "shares": 0, "interactions": 5, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DebLTCqHzBR/", "metricsPartial": false, "id": "ig-93391407", "date": "2026-10-12", "platform": "Instagram", "title": "Shacmate, kenalan sama H3000S Tractor Head \ud83d\ude9b Geser untuk lihat isinya: \u25aa\ufe0f Tenaga 460 hp, siap tarik hingga 70\u2026", "pillar": "Product Introduction", "format": "carousel dokumen", "views": 108, "saves": 0, "unit": "H3000S", "grp": "h3000s_carousel", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/2309649233208747/", "metricsPartial": false, "id": "fb-41465004", "date": "2026-10-14", "platform": "Facebook Page", "title": "Dari jalan berdebu sampai tumpukan muatan penuh, setiap perjalanan punya cerita. Dan di setiap ceritanya, ada\u2026", "pillar": "Customer & Field Activities", "format": "video", "views": 227, "unit": "Belum diidentifikasi", "grp": "jalan_berdebu", "durationS": 25, "avgWatchS": 6.25, "retentionPct": 25, "brandOk": true}, {"reach": 66, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/DegFibBMpK2/", "metricsPartial": false, "id": "ig-77035321", "date": "2026-10-14", "platform": "Instagram", "title": "Dari jalan berdebu sampai tumpukan muatan penuh, setiap perjalanan punya cerita. Dan di setiap ceritanya, ada\u2026", "pillar": "Customer & Field Activities", "format": "video", "views": 93, "saves": 0, "unit": "Belum diidentifikasi", "grp": "jalan_berdebu", "durationS": 24, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/3366463400214465/", "metricsPartial": false, "id": "fb-33465004", "date": "2026-10-19", "platform": "Facebook Page", "title": "Shacmate! Shacman F3000 8x4 siap temani kerja berat kamu. \u2699\ufe0f Mesin Weichai / Cummins, 375 sampai 460 HP \ud83d\udee1\ufe0f Sa\u2026", "pillar": "Product Introduction", "format": "video", "views": 211, "unit": "F3000", "grp": "f3000", "durationS": 32, "avgWatchS": 4.48, "retentionPct": 14, "brandOk": true}, {"reach": 128, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/DetCh1lBKwr/", "metricsPartial": false, "id": "ig-31895886", "date": "2026-10-19", "platform": "Instagram", "title": "Shacmate! Shacman F3000 8x4 siap temani kerja berat kamu. \u2699\ufe0f Mesin Weichai / Cummins, 375 sampai 460 HP \ud83d\udee1\ufe0f Ch\u2026", "pillar": "Product Introduction", "format": "video", "views": 157, "saves": 0, "unit": "F3000", "grp": "f3000", "durationS": 31, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 275, "comments": 13, "shares": 2, "interactions": 290, "newFollowers": 24, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7698195034889374977", "metricsPartial": false, "id": "tt-89374977", "date": "2026-10-19", "platform": "TikTok", "title": "Dari jalan berdebu sampai tumpukan muatan penuh, setiap perjalanan punya cerita. Dan di setiap ceritanya, ada\u2026", "pillar": "Customer & Field Activities", "format": "video", "views": 9218, "unit": "Belum diidentifikasi", "grp": "jalan_berdebu", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 67, "comments": 5, "shares": 1, "interactions": 73, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7698215951719828756", "metricsPartial": false, "id": "tt-19828756", "date": "2026-10-19", "platform": "TikTok", "title": "Shacmate, kenalan sama H3000S Tractor Head \ud83d\ude9b \u25aa\ufe0f Tenaga 460 hp, siap tarik hingga 70 ton \u25aa\ufe0f Pilihan mesin: Wei\u2026", "pillar": "Product Introduction", "format": "video", "views": 2334, "unit": "H3000S", "grp": "h3000s_carousel", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 15, "comments": 1, "shares": 1, "interactions": 17, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7698586196800195861", "metricsPartial": false, "id": "tt-00195861", "date": "2026-10-20", "platform": "TikTok", "title": "Shacmate! Shacman F3000 8x4 siap temani kerja berat kamu. \u2699\ufe0f Mesin Weichai / Cummins, 375 sampai 460 HP \ud83d\udee1\ufe0f Sa\u2026", "pillar": "Product Introduction", "format": "video", "views": 704, "unit": "F3000", "grp": "f3000", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid02sBmUSmzqMmkcqHehd7ed939d9Ppc4cHbrvmh23Lhxhr6UBKE6fyXMd9Q4R4mwASml", "metricsPartial": false, "id": "fb-49465004", "date": "2026-10-21", "platform": "Facebook Page", "title": "A tractor head earns only while it is moving. We engineered the H3000S around three things that decide your c\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 5, "unit": "H3000S", "grp": "tractor_earns", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid0NyUPvC4fBrJfeQJJzG5JLdyKukxApjtDL5phezS7L5AroJpgLCvAj7Jo2UiS4ErDl", "metricsPartial": false, "id": "fb-83465004", "date": "2026-10-21", "platform": "Facebook Page", "title": "\ud83d\udea8 DICARI: Tour Guide Mandarin Freelance (khusus perempuan) PT Shacman Motors Indonesia butuh pemandu wisata b\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 5, "unit": "Umum / Non-produk", "grp": "hire_tour_guide", "durationS": 0, "brandOk": true}, {"reach": 24, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DeyHvMqH0-5/", "metricsPartial": false, "id": "ig-83025127", "date": "2026-10-21", "platform": "Instagram", "title": "\ud83d\udea8 DICARI: Tour Guide Mandarin Freelance (khusus perempuan) PT Shacman Motors Indonesia butuh pemandu wisata b\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 75, "saves": 0, "unit": "Umum / Non-produk", "grp": "hire_tour_guide", "durationS": 0, "brandOk": true}, {"reach": 29, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DewDNB2n3lz/", "metricsPartial": false, "id": "ig-66590432", "date": "2026-10-21", "platform": "Instagram", "title": "A tractor head earns only while it is moving. We engineered the H3000S around three things that decide your c\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 77, "saves": 0, "unit": "H3000S", "grp": "tractor_earns", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/39497763116506277/", "metricsPartial": false, "id": "fb-81465004", "date": "2026-10-22", "platform": "Facebook Page", "title": "Merah, gahar, dan kabinnya enak. Kenalan sama SHACMAN X3000 \ud83d\udd25\ud83d\ude9b Ditenagai mesin Cummins, manuvernya lincah bua\u2026", "pillar": "Product Introduction", "format": "video", "views": 251, "unit": "X3000", "grp": "x3000_merah", "durationS": 23, "avgWatchS": 4.97, "retentionPct": 21.6, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1031322209986750/", "metricsPartial": false, "id": "fb-35465004", "date": "2026-10-22", "platform": "Facebook Page", "title": "Siapa nih yang udah nungguin gebrakan terbaru dari SHACMAN? \ud83e\udd29 Bulan ini, kita baru aja ngadain acara super me\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 3, "unit": "Umum / Non-produk", "grp": "next_move", "durationS": 96, "avgWatchS": 4.47, "retentionPct": 4.7, "brandOk": true}, {"reach": 50, "clicks": 0, "ctr": 0, "likes": 4, "comments": 0, "shares": 0, "interactions": 4, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/De09T9Ou4Zh/", "metricsPartial": false, "id": "ig-86266711", "date": "2026-10-22", "platform": "Instagram", "title": "Siapa nih yang udah nungguin gebrakan terbaru dari SHACMAN? \ud83e\udd29 Bulan ini, kita baru aja ngadain acara super me\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 72, "saves": 0, "unit": "Umum / Non-produk", "grp": "next_move", "durationS": 95, "brandOk": true}, {"reach": 148, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/Deypzbgv8Zx/", "metricsPartial": false, "id": "ig-39108468", "date": "2026-10-22", "platform": "Instagram", "title": "Merah, gahar, dan kabinnya enak. Kenalan sama SHACMAN X3000 \ud83d\udd25\ud83d\ude9b Ditenagai mesin Cummins, manuvernya lincah bua\u2026", "pillar": "Product Introduction", "format": "video", "views": 174, "saves": 0, "unit": "X3000", "grp": "x3000_merah", "durationS": 22, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 20, "comments": 2, "shares": 4, "interactions": 26, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7699420184137747713", "metricsPartial": false, "id": "tt-37747713", "date": "2026-10-22", "platform": "TikTok", "title": "Merah, gahar, dan kabinnya enak. Kenalan sama SHACMAN X3000 \ud83d\udd25\ud83d\ude9b Ditenagai mesin Cummins, manuvernya lincah bua\u2026", "pillar": "Product Introduction", "format": "video", "views": 963, "unit": "X3000", "grp": "x3000_merah", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 10, "comments": 1, "shares": 1, "interactions": 12, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7699752359810895125", "metricsPartial": false, "id": "tt-10895125", "date": "2026-10-23", "platform": "TikTok", "title": "Siapa nih yang udah nungguin gebrakan terbaru dari SHACMAN? \ud83e\udd29 Bulan ini, kita baru aja ngadain acara super me\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 394, "unit": "Umum / Non-produk", "grp": "next_move", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=WIDT_uZiWyA", "metricsPartial": true, "id": "yt-WIDT_uZiWyA", "date": "2026-10-23", "platform": "YouTube", "title": "Walkaround SHACMAN H3000S: Tough, Efficient, & Comfortable for Shacmates! \ud83d\ude9b\ud83d\udca8", "pillar": "Product Introduction", "format": "Long Video", "views": 50, "unit": "H3000S", "grp": "walkaround_okt", "durationS": 76, "engagedViews": 31, "retentionPct": 45.7, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=I-nY-MoV_gk", "metricsPartial": true, "id": "yt-I-nY-MoV_gk", "date": "2026-10-23", "platform": "YouTube", "title": "Next Move, Next Horizon: SHACMAN Worldwide Partnership Conference & GlobeFest 2026", "pillar": "Branding & Corporate", "format": "Long Video", "views": 19, "unit": "Umum / Non-produk", "grp": "next_move", "durationS": 96, "engagedViews": 16, "retentionPct": 68.5, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=oJxpk4-H6t0", "metricsPartial": true, "id": "yt-oJxpk4-H6t0", "date": "2026-10-24", "platform": "YT Shorts", "title": "Shacman Hybrid! \u26a1 Hemat BBM 25%, tarikan +20% responsif. Cek shacmanindonesia.com", "pillar": "Product Introduction", "format": "video", "views": 770, "unit": "New Energy EV/NG", "grp": "hybrid", "durationS": 22, "engagedViews": 393, "retentionPct": 50.9, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/reel/1646128860624879/", "metricsPartial": false, "id": "fb-95465004", "date": "2026-10-25", "platform": "Facebook Page", "title": "Siapa di sini yang waktu kecil suka banget main truk-trukan, dan sekarang malah pegang armada aslinya? \ud83d\ude4b\u200d\u2642\ufe0f\ud83d\udd25\u2026", "pillar": "Trend Jacking", "format": "video", "views": 33, "unit": "X3000", "grp": "toys", "durationS": 71, "avgWatchS": 3.44, "retentionPct": 4.8, "brandOk": true}, {"reach": 52, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/reel/De8QS6sBki4/", "metricsPartial": false, "id": "ig-24191752", "date": "2026-10-25", "platform": "Instagram", "title": "Siapa di sini yang waktu kecil suka banget main truk-trukan, dan sekarang malah pegang armada aslinya? \ud83d\ude4b\u200d\u2642\ufe0f\ud83d\udd25\u2026", "pillar": "Trend Jacking", "format": "video", "views": 82, "saves": 0, "unit": "X3000", "grp": "toys", "durationS": 70, "brandOk": true}, {"reach": 0, "clicks": 1, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid02PXMwfPBngLi2cuBVgiWZLS9Q7Kw24R3nBMV17Pg6WjVcUoQWSyusiRMHkecWNMAWl", "metricsPartial": false, "id": "fb-95465004", "date": "2026-10-26", "platform": "Facebook Page", "title": "Siap gaspol karirmu bareng pionir truk komersial di Indonesia? \ud83d\ude9b\ud83d\udca8 Halo Shacmate! PT Shacman Motors Indonesia\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 6, "unit": "Umum / Non-produk", "grp": "hire_sales_staff", "durationS": 0, "brandOk": true}, {"reach": 33, "clicks": 0, "ctr": 0, "likes": 2, "comments": 0, "shares": 0, "interactions": 2, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/De8xe2gnwDR/", "metricsPartial": false, "id": "ig-95881100", "date": "2026-10-26", "platform": "Instagram", "title": "Siap gaspol karirmu bareng pionir truk komersial di Indonesia? \ud83d\ude9b\ud83d\udca8 Halo Shacmate! PT Shacman Motors Indonesia\u2026", "pillar": "Branding & Corporate", "format": "carousel dokumen", "views": 105, "saves": 0, "unit": "Umum / Non-produk", "grp": "hire_sales_staff", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 18, "comments": 1, "shares": 0, "interactions": 19, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7700803707323141383", "metricsPartial": false, "id": "tt-23141383", "date": "2026-10-26", "platform": "TikTok", "title": "Dari mainan masa kecil, sekarang jadi armada X3000 beneran! \ud83d\udd25 Gak ada mimpi yang terlalu besar kalau partner\u2026", "pillar": "Trend Jacking", "format": "video", "views": 793, "unit": "X3000", "grp": "toys", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 2, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=RhfuF_xmRfU", "metricsPartial": true, "id": "yt-RhfuF_xmRfU", "date": "2026-10-26", "platform": "YT Shorts", "title": "Tanjakan curam, tikungan tajam, jalan berkelok?Santai, Shacmate \ud83d\ude0e \ud83d\ude9b", "pillar": "Customer & Field Activities", "format": "video", "views": 3066, "unit": "Belum diidentifikasi", "grp": "tanjakan", "durationS": 31, "engagedViews": 1513, "retentionPct": 90.9, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=xBZANqEF7sk", "metricsPartial": true, "id": "yt-xBZANqEF7sk", "date": "2026-10-26", "platform": "YouTube", "title": "From Toy Trucks to Heavy-Duty Reality: The Shacman X3000 Fleet", "pillar": "Trend Jacking", "format": "Long Video", "views": 65, "unit": "X3000", "grp": "toys", "durationS": 71, "engagedViews": 49, "retentionPct": 42.4, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid02Z6avQWctg34Yr9CnnGx1yimTXqTkcywftbeokRnnvMsadS9Ltc2TpnwvXqAwnLgol", "metricsPartial": false, "id": "fb-37465004", "date": "2026-10-27", "platform": "Facebook Page", "title": "Lincah di jalur kota, tangguh di medan berat! Kenalan lebih dekat sama SHACMAN H3000. \ud83d\ude9b\ud83d\udca8 Buat armada logistik\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 2, "unit": "Belum diidentifikasi", "grp": "lincah", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid0d1dkj5cWBiSaMAMTb6L3ztYj712iYjSUbr8xzgeiLt5wSHoPpFdY5eFr5iGPTfszl", "metricsPartial": false, "id": "fb-87465004", "date": "2026-10-27", "platform": "Facebook Page", "title": "Selamat memperingati Hari Sumpah Pemuda, Shacmate! \ud83d\udcaa Tepat di tanggal 28 Oktober ini, kita kembali diingatkan\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 1, "unit": "Umum / Non-produk", "grp": "sumpah_pemuda", "durationS": 0, "brandOk": true}, {"reach": 17, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DfBoycjnzMU/", "metricsPartial": false, "id": "ig-81445545", "date": "2026-10-27", "platform": "Instagram", "title": "Selamat memperingati Hari Sumpah Pemuda, Shacmate! \ud83d\udcaa Tepat di tanggal 28 Oktober ini, kita kembali diingatkan\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 42, "saves": 0, "unit": "Umum / Non-produk", "grp": "sumpah_pemuda", "durationS": 0, "brandOk": true}, {"reach": 30, "clicks": 0, "ctr": 0, "likes": 4, "comments": 0, "shares": 0, "interactions": 6, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/De_TpejHzlK/", "metricsPartial": false, "id": "ig-99542405", "date": "2026-10-27", "platform": "Instagram", "title": "Lincah di jalur kota, tangguh di medan berat! Kenalan lebih dekat sama SHACMAN H3000. \ud83d\ude9b\ud83d\udca8 Buat armada logistik\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 65, "saves": 2, "unit": "Belum diidentifikasi", "grp": "lincah", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 8, "comments": 0, "shares": 0, "interactions": 8, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7701580766530112769", "metricsPartial": false, "id": "tt-30112769", "date": "2026-10-28", "platform": "TikTok", "title": "Satu nusa, satu bangsa, satu semangat pantang menyerah untuk terus maju! \ud83c\uddee\ud83c\udde9 Selamat Hari Sumpah Pemuda 2026!\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 391, "unit": "Umum / Non-produk", "grp": "sumpah_pemuda", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid02GLWMVoN36PK8VR8KbkMiVvh1mZeKoXgqR5rXEYfS8Z3oAHtFrwSYN7v5szydZfRUl", "metricsPartial": false, "id": "fb-45465004", "date": "2026-10-29", "platform": "Facebook Page", "title": "WE ARE HIRING!!! Vehicle Registration & Certification Specialist \ud83d\udccd Penempatan: Jakarta Timur Yang akan Kamu k\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 4, "unit": "Umum / Non-produk", "grp": "hire_vrc_okt", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid0xkA3xGshLV2dJfKLJ6ipPBw226GnuB5uwXMKc3AhRVjLkLbNyNgHn6sFvautWYnSl", "metricsPartial": false, "id": "fb-53465004", "date": "2026-10-29", "platform": "Facebook Page", "title": "Orang Semarang dan sekitarnya yang jago jualan? Shacman cari kamu! \ud83d\ude9b\ud83d\udccd Kami buka lowongan: \ud83d\udccc Sales Staff \ud83d\udccd Lok\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 3, "unit": "Umum / Non-produk", "grp": "hire_semarang", "durationS": 0, "brandOk": true}, {"reach": 27, "clicks": 0, "ctr": 0, "likes": 3, "comments": 0, "shares": 0, "interactions": 3, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DfG-rCvH-HL/", "metricsPartial": false, "id": "ig-23075409", "date": "2026-10-29", "platform": "Instagram", "title": "Orang Semarang dan sekitarnya yang jago jualan? Shacman cari kamu! \ud83d\ude9b\ud83d\udccd Kami buka lowongan: \ud83d\udccc Sales Staff \ud83d\udccd Lok\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 71, "saves": 0, "unit": "Umum / Non-produk", "grp": "hire_semarang", "durationS": 0, "brandOk": true}, {"reach": 28, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DfGvLpcn2Mp/", "metricsPartial": false, "id": "ig-86240069", "date": "2026-10-29", "platform": "Instagram", "title": "WE ARE HIRING!!! Vehicle Registration & Certification Specialist \ud83d\udccd Penempatan: Jakarta Timur Yang akan Kamu k\u2026", "pillar": "Branding & Corporate", "format": "tanpa label video (gambar/teks)", "views": 75, "saves": 0, "unit": "Umum / Non-produk", "grp": "hire_vrc_okt", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 1, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.facebook.com/shacmanidofficial/posts/pfbid022qguZ5RWYN42eT2fD6ZV3wMXhMsY9GejGiyPjYnekXoKX5Lpd1VRyAgpEWwpecYVl", "metricsPartial": false, "id": "fb-25465004", "date": "2026-10-30", "platform": "Facebook Page", "title": "Kenalan sama SHACMAN H3000S 6x4 Tractor Head Yang bikin beda buat operasional on road: \ud83d\udcaa Mesin 400 HP: tenaga\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 2, "unit": "H3000S", "grp": "h3000s_poster", "durationS": 0, "brandOk": true}, {"reach": 21, "clicks": 0, "ctr": 0, "likes": 1, "comments": 0, "shares": 0, "interactions": 1, "newFollowers": 0, "notes": "", "link": "https://www.instagram.com/p/DfHJv6dHwMH/", "metricsPartial": false, "id": "ig-03626873", "date": "2026-10-30", "platform": "Instagram", "title": "Kenalan sama SHACMAN H3000S 6x4 Tractor Head Yang bikin beda buat operasional on road: \ud83d\udcaa Mesin 400 HP: tenaga\u2026", "pillar": "Product Introduction", "format": "tanpa label video (gambar/teks)", "views": 40, "saves": 0, "unit": "H3000S", "grp": "h3000s_poster", "durationS": 0, "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 15, "comments": 0, "shares": 0, "interactions": 15, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7702315704963435797", "metricsPartial": false, "id": "tt-63435797", "date": "2026-10-30", "platform": "TikTok", "title": "Kerja bareng Shacman di Jakarta Timur \ud83d\ude9b Dicari: Vehicle Registration & Certification Specialist (STNK, SRUT,\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 408, "unit": "Umum / Non-produk", "grp": "hire_vrc_okt", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 7, "comments": 0, "shares": 0, "interactions": 7, "newFollowers": 0, "notes": "", "link": "https://www.tiktok.com/@shacmanid_official/video/7702350635043179796", "metricsPartial": false, "id": "tt-43179796", "date": "2026-10-30", "platform": "TikTok", "title": "\ud83d\udccd LOKER SEMARANG: Sales Staff Shacman \ud83d\ude9b Gaji negosiasi + komisi. Kirim CV ke ptshacmanmotorsindonesia@gmail.c\u2026", "pillar": "Branding & Corporate", "format": "video", "views": 350, "unit": "Umum / Non-produk", "grp": "hire_semarang", "brandOk": true}, {"reach": 0, "clicks": 0, "ctr": 0, "likes": 0, "comments": 0, "shares": 0, "interactions": 0, "newFollowers": 0, "notes": "Suka/komentar tidak ada di ekspor YouTube Studio; views gabungan Sep+Okt", "link": "https://www.youtube.com/watch?v=KngKt548leE", "metricsPartial": true, "id": "yt-KngKt548leE", "date": "2026-10-30", "platform": "YT Shorts", "title": "shacman truck siap taklukkan #shacmanindonesia", "pillar": "Customer & Field Activities", "format": "video", "views": 1298, "unit": "Belum diidentifikasi", "grp": "yt_siap_taklukkan", "durationS": 22, "engagedViews": 433, "retentionPct": 65.3, "brandOk": true}]};

function getDefaultData() {
  return JSON.parse(JSON.stringify(INITIAL_BACKUP_DATA));

  return {
    selectedMonth: 'ALL',
    planView: 'kanban',
    selectedPlatformFilter: 'ALL',
    dataVersion: DATA_VERSION,
    kpiInputs: {},
    kpiSettings: { cap: 120, erIncludeClicks: true, contentMode: 'unique', retentionSource: 'youtube', startMonth: '2026-09' },
    // Input bulanan KPI (nilai awal dari data laporan: LinkedIn, TikTok, YouTube; reach YouTube = unique reach)
    monthly: {
      '2026-08': { followers: { 'LinkedIn Page': 46, 'TikTok': 5, 'YouTube': 0 }, reach: { 'LinkedIn Page': 433 }, teamwork: null, reportDone: false },
      '2026-09': { followers: { 'LinkedIn Page': 154, 'TikTok': 50, 'YouTube': 0 }, reach: { 'LinkedIn Page': 2488, 'YouTube': 11 }, teamwork: null, reportDone: false },
      '2026-10': { followers: { 'LinkedIn Page': 280, 'TikTok': 194, 'YouTube': 4, 'Facebook Page': 5, 'Instagram': 30 }, reach: { 'LinkedIn Page': 3009, 'YouTube': 4084 }, teamwork: null, reportDone: false }
    },
    leads: [],
    // Snapshot pengikut & pertambahan Sep–Okt 2026 (laporan_ringkasan_socmed.csv)
    followers: {
      'Instagram': { current: 30, growth: 0 },        // pengikut baru: n/a di CSV
      'TikTok': { current: 194, growth: 189 },
      'LinkedIn Page': { current: 280, growth: 234 },
      'Facebook Page': { current: 5, growth: 4 },
      'Threads': { current: 0, growth: 0 },           // tidak ada data
      'YouTube': { current: 4, growth: 2 },           // total subscriber channel = 4
      'YT Shorts': { current: 0, growth: 2 }          // subscriber dihitung di YouTube agar tidak dobel
    },
    // Ringkasan level kanal Sep–Okt 2026
    channelStats: {
      'LinkedIn Page': { views: 12106, viewsLabel: 'impressions', reach: 5098, engagement: 215, clicks: 1929, er: 1.78, posts: 23, note: '100% organik (0 sponsored). Klik termasuk geser carousel.' },
      'TikTok': { views: 47898, viewsLabel: 'views video', reach: 29300, engagement: 1594, posts: 19, note: '19 video (17 Sep–30 Okt). Reach = total viewers ±29,3K (hampir semua baru); jam aktif puncak 06.00.' },
      'Instagram': { views: 6218, viewsLabel: 'tayangan', reach: 2600, engagement: 213, posts: 28, stories: 27, note: '385 kunjungan profil, 36 ketukan bio; 77% tayangan dari non-pengikut. Pengikut baru n/a.' },
      'Facebook Page': { views: 1673, viewsLabel: 'tayangan', reach: 1333, engagement: 21, posts: 27, stories: 32, note: 'Reels ±91% tayangan; 123 kunjungan halaman; 0 klik tautan. 27 konten (1 post otomatis ganti foto profil tidak dihitung).' },
      'Threads': { views: null, reach: null, engagement: null, posts: null, note: 'Tidak ada data di CSV.' },
      'YouTube': { views: 175, viewsLabel: 'views video panjang', reach: 2400, engagement: null, posts: 6, note: 'CTR thumbnail 8,3%; rata-rata tonton 0:44. Audiens bulanan ±2,4K & watch time 17,2 jam (seluruh channel).' },
      'YT Shorts': { views: 5134, viewsLabel: 'views', reach: null, engagement: 40, posts: 3, note: '2.339 engaged views; 40 like; 0 share.' }
    },
    reportNotes: {
      highlight: '1. LinkedIn tumbuh paling konsisten: followers bersih +108 (Sep) → +126 (Okt), total 280 per 2 Nov. Impressions naik 4.939 → 7.167 (+45%).\n2. Posting lowongan mendominasi impressions LinkedIn (teratas: rekrutmen after-sales 3.104 impressions, 70 reaksi).\n3. TikTok menjadi mesin jangkauan: ±29,3K viewers, +144 followers di Oktober. Video "Tanjakan" (±15K views, 109 komentar) teratas.\n4. Pertambahan followers LinkedIn + TikTok naik 76,5% (153 → 270).',
      strategy: '1. Konten produk LinkedIn (H3000S, X5000, F3000, X3000) masih 150–300 impressions per posting — uji format carousel spesifikasi.\n2. Repurpose video TikTok teratas ke Reels & Shorts (video Hybrid: 8.043 views di TikTok vs 276 IG & 247 FB).\n3. Instagram belum 100 pengikut (demografi belum tersedia) — konversi 385 kunjungan profil menjadi pengikut.\n4. Aktifkan wawasan Cerita Facebook; mulai catat data Threads.\n(Catatan ini dibuat otomatis dari CSV — silakan edit.)'
    },
    plans: [],
    ideas: [],
    posts: getRealPosts()
  };
}

let state = loadState();
let calendarDate = new Date();
let currentTab = 'dashboard';
let dashChartInstance = null;
let reportPillarChartInstance = null;
let reportPillarAvgChartInstance = null;

// Pastikan struktur data valid (dipakai saat load & import backup)
function sanitizeState(data) {
  const base = getDefaultData();
  if (!data || typeof data !== 'object' || Array.isArray(data)) return base;
  const merged = { ...base, ...data };
  ['plans', 'ideas', 'posts', 'leads'].forEach(k => {
    if (!Array.isArray(merged[k])) merged[k] = base[k];
  });
  ['followers', 'channelStats', 'reportNotes', 'kpiInputs', 'monthly'].forEach(k => {
    if (!merged[k] || typeof merged[k] !== 'object' || Array.isArray(merged[k])) merged[k] = base[k];
  });
  merged.kpiSettings = { ...base.kpiSettings, ...((data.kpiSettings && typeof data.kpiSettings === 'object') ? data.kpiSettings : {}) };
  // Migrasi data lama
  const ver = Number(data.dataVersion) || 1;
  if (ver < 2) merged.posts = merged.posts.map(applyRetagV2);
  if (ver < 3) migrateToV3(merged);
  if (ver < 4) migrateToV4(merged);
  merged.dataVersion = DATA_VERSION;
  return merged;
}

// v3: ganti data post contoh lama (tt/ig/fb/yts) dengan data lengkap semua platform; post tambahan buatan sendiri tidak disentuh
function migrateToV3(m) {
  const real = (typeof window !== 'undefined' && Array.isArray(window.REAL_POSTS_2026)) ? window.REAL_POSTS_2026 : null;
  if (!real) return;
  m.posts = m.posts.filter(p => !/^(tt|ig|fb|yts)-0\d$/.test(String(p.id)));
  const have = new Set(m.posts.map(p => p.id));
  real.forEach(p => { if (!have.has(p.id)) m.posts.push({ ...p }); });
  m.posts.forEach(p => {
    if (p.id === 'li-14' && p.unit === UNIT_GENERAL) { p.pillar = 'Aksi Medan Tambang & Hauling'; p.unit = UNIT_UNKNOWN; p.grp = 'jalan_berdebu'; }
    if (p.id === 'li-20' && p.unit === UNIT_GENERAL) { p.unit = 'X3000'; p.grp = 'toys'; }
    if (!p.grp) { const r = real.find(x => x.id === p.id); if (r && r.grp) p.grp = r.grp; }
  });
  const tt = m.channelStats && m.channelStats.TikTok;
  if (tt && (tt.engagement === null || tt.engagement === undefined) && Number(tt.views) === 29300) {
    m.channelStats.TikTok = { views: 47898, viewsLabel: 'views video', reach: 29300, engagement: 1594, posts: 19, note: '19 video (17 Sep–30 Okt). Reach = total viewers ±29,3K (hampir semua baru); jam aktif puncak 06.00.' };
  }
}

// v4: 10 pilar lama -> 5 Content Pillar; seri truk tidak lagi dipakai untuk pengelompokan
function migrateToV4(m) {
  m.posts.forEach(p => {
    const old = OLD_PILLAR_MAP[p.pillar];
    if (old) p.pillar = (p.grp && GROUP_PILLAR[p.grp]) ? GROUP_PILLAR[p.grp] : old;
  });
  const cs = m.channelStats || {};
  if (cs.YouTube && (cs.YouTube.posts === null || cs.YouTube.posts === undefined)) cs.YouTube.posts = 6;
  if (cs['Facebook Page'] && cs['Facebook Page'].posts === 28) cs['Facebook Page'].posts = 27;
  (m.plans || []).forEach(p => { p.pillar = mapPillarName(p.pillar); });
  (m.ideas || []).forEach(p => { p.pillar = mapPillarName(p.pillar); });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    const parsed = JSON.parse(raw);
    const clean = sanitizeState(parsed);
    if (!(Number(parsed && parsed.dataVersion) >= DATA_VERSION)) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(clean)); } catch (e2) {}
    }
    return clean;
  } catch (e) {
    console.error('Gagal memuat data tersimpan:', e);
    return getDefaultData();
  }
}

// =========================================================
// UNDO / REDO (riwayat 20 langkah; hilang saat halaman ditutup/refresh)
// Setiap saveState() yang mengubah data dicatat. Pilihan tampilan (periode, filter, view) tidak dicatat.
// =========================================================
const UNDO_LIMIT = 20;
const UI_ONLY_KEYS = ['selectedMonth', 'selectedPlatformFilter', 'planView'];
let undoStack = [];
let redoStack = [];
let lastDataJson = null;

function dataJson(st) {
  const copy = { ...st };
  UI_ONLY_KEYS.forEach(k => delete copy[k]);
  return JSON.stringify(copy);
}

function describeChange(prevJson, nextJson) {
  let prev, next;
  try { prev = JSON.parse(prevJson); next = JSON.parse(nextJson); } catch (e) { return 'perubahan data'; }
  const short = t => { t = String(t || '').replace(/\s+/g, ' ').trim(); return t.length > 40 ? t.slice(0, 39) + '…' : t; };
  const lists = { posts: 'post', plans: 'content plan', ideas: 'ide', leads: 'lead' };
  const changedKeys = Object.keys({ ...prev, ...next }).filter(k => JSON.stringify(prev[k]) !== JSON.stringify(next[k]));
  if (changedKeys.length > 3) return 'perubahan besar (restore / muat data)';
  for (const k of Object.keys(lists)) {
    if (!changedKeys.includes(k)) continue;
    const a = new Map((prev[k] || []).map(x => [x.id, x]));
    const b = new Map((next[k] || []).map(x => [x.id, x]));
    const added = [...b.keys()].filter(id => !a.has(id));
    const removed = [...a.keys()].filter(id => !b.has(id));
    const edited = [...b.keys()].filter(id => a.has(id) && JSON.stringify(a.get(id)) !== JSON.stringify(b.get(id)));
    const nm = x => short(x.title || x.name || '');
    if (removed.length === 1 && !added.length) return `hapus ${lists[k]} "${nm(a.get(removed[0]))}"`;
    if (added.length === 1 && !removed.length) return `tambah ${lists[k]} "${nm(b.get(added[0]))}"`;
    if (edited.length === 1 && !added.length && !removed.length) return `ubah ${lists[k]} "${nm(b.get(edited[0]))}"`;
    return `perubahan ${lists[k]} (${added.length} tambah, ${removed.length} hapus, ${edited.length} ubah)`;
  }
  const labels = { monthly: 'Input Bulanan', kpiSettings: 'pengaturan KPI', followers: 'data followers', reportNotes: 'catatan laporan', channelStats: 'statistik kanal', kpiInputs: 'input KPI' };
  const k = changedKeys.find(x => labels[x]);
  return k ? `ubah ${labels[k]}` : 'perubahan data';
}

function recordHistory() {
  const now = dataJson(state);
  if (lastDataJson === null) { lastDataJson = now; return; }
  if (now === lastDataJson) return;
  undoStack.push({ json: lastDataJson, label: describeChange(lastDataJson, now) });
  if (undoStack.length > UNDO_LIMIT) undoStack.shift();
  redoStack = [];
  lastDataJson = now;
  updateUndoButtons();
}

function applyHistoryState(json) {
  const ui = {};
  UI_ONLY_KEYS.forEach(k => { ui[k] = state[k]; });
  state = { ...JSON.parse(json), ...ui };
  lastDataJson = json;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { console.error(e); }
  updateSidebarBadges();
  renderAll();
  updateUndoButtons();
}

function undoAction() {
  if (!undoStack.length) { showToast('Tidak ada yang bisa di-undo.'); return; }
  const item = undoStack.pop();
  redoStack.push({ json: lastDataJson, label: item.label });
  applyHistoryState(item.json);
  showToast('Dibatalkan: ' + item.label);
}

function redoAction() {
  if (!redoStack.length) { showToast('Tidak ada yang bisa di-redo.'); return; }
  const item = redoStack.pop();
  undoStack.push({ json: lastDataJson, label: item.label });
  applyHistoryState(item.json);
  showToast('Diulang: ' + item.label);
}

function updateUndoButtons() {
  const u = document.getElementById('btnUndo'), r = document.getElementById('btnRedo');
  if (u) {
    u.disabled = !undoStack.length;
    u.title = undoStack.length ? `Undo: ${undoStack[undoStack.length - 1].label} (Ctrl+Z)` : 'Belum ada yang bisa di-undo';
  }
  if (r) {
    r.disabled = !redoStack.length;
    r.title = redoStack.length ? `Redo: ${redoStack[redoStack.length - 1].label} (Ctrl+Y)` : 'Belum ada yang bisa di-redo';
  }
}

document.addEventListener('keydown', e => {
  if (!(e.ctrlKey || e.metaKey)) return;
  const key = e.key.toLowerCase();
  const isUndo = key === 'z' && !e.shiftKey;
  const isRedo = key === 'y' || (key === 'z' && e.shiftKey);
  if (!isUndo && !isRedo) return;
  const t = e.target;
  if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return; // undo bawaan teks
  if ([...document.querySelectorAll('[id$="Modal"]')].some(m => !m.classList.contains('hidden'))) return;
  e.preventDefault();
  if (isUndo) undoAction(); else redoAction();
});

let storageWarned = false;
function saveState() {
  recordHistory();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Gagal menyimpan data:', e);
    if (!storageWarned) {
      storageWarned = true;
      alert('PERINGATAN: Data gagal disimpan di browser (penyimpanan penuh atau diblokir). Segera klik Backup JSON agar pekerjaanmu tidak hilang.');
    }
  }
  updateSidebarBadges();
}


// =========================================================
// RINGKASAN ANGKA LINTAS PLATFORM (dipakai Dashboard, Report, KPI)
// =========================================================
function fmtPct(v, d = 2) {
  return (v === null || v === undefined || isNaN(v)) ? '-' : Number(v).toFixed(d).replace('.', ',') + '%';
}

// Engagement Rate agregat (jumlah interaksi ÷ jumlah tayangan), BUKAN rata-rata ER per post.
// includeClicks=true mengikuti definisi di form KPI (likes, comments, shares, saves, clicks, dst).
// Catatan: klik carousel LinkedIn termasuk geser halaman, sehingga ER dengan klik cenderung lebih tinggi.
function calcErAggregate(posts, isAll, includeClicks) {
  let inter = 0, clicks = 0, base = 0;
  if (isAll && state.channelStats) {
    Object.values(state.channelStats).forEach(c => {
      if (c.engagement === null || c.engagement === undefined || !Number(c.views)) return;
      inter += Number(c.engagement);
      clicks += Number(c.clicks || 0);
      base += Number(c.views);
    });
  } else {
    posts.filter(p => !p.metricsPartial).forEach(p => {
      const b = p.platform === 'LinkedIn Page'
        ? Number(p.views || 0)
        : (Number(p.reach || 0) > 0 ? Number(p.reach) : Number(p.views || 0));
      if (!b) return;
      inter += calcEngagement(p);
      clicks += Number(p.clicks || 0);
      base += b;
    });
  }
  return base ? ((inter + (includeClicks ? clicks : 0)) / base) * 100 : null;
}

// Jumlah konten feed (tanpa cerita) = jumlah post yang tercatat
function countFeedPosts(posts, isAll) {
  return { total: posts.length, partial: false };
}

function sumChannelClicks(posts, isAll) {
  if (isAll && state.channelStats) return Object.values(state.channelStats).reduce((s, c) => s + Number(c.clicks || 0), 0);
  return posts.reduce((s, p) => s + Number(p.clicks || 0), 0);
}

// =========================================================
// UTILITY HELPERS
// =========================================================
function formatNum(num) {
  return Number(num || 0).toLocaleString('id-ID');
}

function getChannel(id) {
  return (state.channelStats && state.channelStats[id]) || {};
}

function calcEngagement(post) {
  if (post.interactions !== undefined && post.interactions !== null && Number(post.interactions) > 0) {
    return Number(post.interactions);
  }
  return Number(post.likes || 0) + Number(post.comments || 0) + Number(post.shares || 0);
}

function calcER(post) {
  if (post.metricsPartial) return null;
  const views = Number(post.views || 0);
  const reach = Number(post.reach || 0);
  const eng = calcEngagement(post);
  if (post.platform === 'LinkedIn Page') {
    if (!views) return 0;
    return ((eng + Number(post.clicks || 0)) / views) * 100;
  }
  const base = reach > 0 ? reach : views;
  if (!base) return 0;
  return ((eng / base) * 100);
}

function getPlatformMeta(platformId) {
  return PLATFORMS.find(p => p.id === platformId) || PLATFORMS[0];
}

let toastTimer = null;
function showToast(msg, duration = 2800) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').innerText = msg;
  toast.classList.remove('hidden');
  toast.classList.add('flex');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, duration);
}

function copyText(text) {
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    showToast(ok ? 'Disalin ke clipboard!' : 'Gagal menyalin. Salin manual.');
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Disalin ke clipboard!'))
      .catch(fallback);
  } else {
    fallback();
  }
}

function matchesGlobalMonth(dateStr) {
  if (!state.selectedMonth || state.selectedMonth === 'ALL') return true;
  return (dateStr || '').startsWith(state.selectedMonth);
}

function formatMonthLabel(ym) {
  if (!ym || ym === 'ALL') return 'Semua Periode';
  const [y, m] = ym.split('-');
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  return `${months[parseInt(m, 10) - 1]} ${y}`;
}

// =========================================================
// NAVIGATION & GLOBAL FILTER
// =========================================================
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.getElementById(`tab-${tabId}`).classList.remove('hidden');

  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  const titles = {
    'dashboard': 'Dashboard Overview (2026 Edition)',
    'content-plan': 'Content Plan & Jadwal Produksi 2026',
    'idea-bank': 'Bank Ide & Generator Katalog 2026',
    'post-data': 'Post Data & Analitik 7 Medsos',
    'monthly-report': 'Executive Monthly Report',
    'kpi': 'KPI Social Media & Brand Marketing',
    'brand-kit': 'Brand Kit & Referensi Shacman Indonesia'
  };
  document.getElementById('pageTitle').innerText = titles[tabId] || 'SHACMAN Branding Hub';

  currentTab = tabId;
  renderAll();
}

function resetMonthFilter() {
  state.selectedMonth = 'ALL';
  document.getElementById('globalMonthFilter').value = '';
  saveState();
  renderAll();
}

function updateSidebarBadges() {
  const filteredPlans = state.plans.filter(p => matchesGlobalMonth(p.date));
  const filteredPosts = state.posts.filter(p => matchesGlobalMonth(p.date));
  document.getElementById('badge-plan').innerText = filteredPlans.length;
  document.getElementById('badge-ideas').innerText = state.ideas.length;
  document.getElementById('badge-posts').innerText = filteredPosts.length;
  document.getElementById('activePeriodBadge').innerText = formatMonthLabel(state.selectedMonth);
}

// =========================================================
// TAB 1: DASHBOARD RENDERER
// =========================================================
function renderDashboard() {
  const posts = state.posts.filter(p => matchesGlobalMonth(p.date));
  const plans = state.plans.filter(p => matchesGlobalMonth(p.date));

  // Channel aggregates (Agustus-Oktober 2026 dari laporan_ringkasan_socmed.csv)
  const isAll = !state.selectedMonth || state.selectedMonth === 'ALL';
  const ch = state.channelStats || {};
  const totalViewsChannel = Object.values(ch).reduce((s, c) => s + Number(c.views || 0), 0);
  const totalReachChannel = Object.values(ch).reduce((s, c) => s + Number(c.reach || 0), 0);
  const totalEngChannel = Object.values(ch).reduce((s, c) => s + Number(c.engagement || 0), 0);

  const displayViews = isAll && totalViewsChannel ? totalViewsChannel : posts.reduce((s, p) => s + Number(p.views || 0), 0);
  const displayReach = isAll && totalReachChannel ? totalReachChannel : posts.reduce((s, p) => s + Number(p.reach || 0), 0);
  const displayEng = isAll && totalEngChannel ? totalEngChannel : posts.reduce((s, p) => s + calcEngagement(p), 0);

  const erKpi = calcErAggregate(posts, isAll, true);
  const erPlain = calcErAggregate(posts, isAll, false);
  const feed = countFeedPosts(posts, isAll);

  document.getElementById('dash-total-posts').innerText = formatNum(isAll ? feed.total : posts.length) + (isAll && feed.partial ? '+' : '');
  document.getElementById('dash-posts-sub').innerText = isAll
    ? 'Semua platform · tanpa cerita'
    : `Periode: ${formatMonthLabel(state.selectedMonth)}`;
  document.getElementById('dash-total-views').innerText = formatNum(displayViews);
  document.getElementById('dash-total-reach').innerText = `Reach gabungan: ${formatNum(displayReach)} (tidak unik, metrik tiap platform beda)`;
  document.getElementById('dash-total-eng').innerText = formatNum(displayEng);
  document.getElementById('dash-avg-er').innerText = `ER ${fmtPct(erKpi)} termasuk klik · ${fmtPct(erPlain)} tanpa klik`;
  document.getElementById('dash-pipeline-count').innerText = formatNum(plans.length + state.ideas.length);
  document.getElementById('dash-pipeline-sub').innerText = `${plans.length} di Content Plan • ${state.ideas.length} di Bank Ide`;

  // 7 Platform Cards
  const grid = document.getElementById('dash-platform-grid');
  grid.innerHTML = PLATFORMS.map(plat => {
    const pPosts = posts.filter(p => p.platform === plat.id);
    const cStat = getChannel(plat.id);
    const pViews = isAll && cStat.views !== undefined && cStat.views !== null ? cStat.views : pPosts.reduce((s, p) => s + Number(p.views || 0), 0);
    const pEng = isAll && cStat.engagement !== undefined ? cStat.engagement : pPosts.reduce((s, p) => s + calcEngagement(p), 0);
    const fInfo = state.followers[plat.id] || { current: 0, growth: 0 };
    const viewsLabel = cStat.viewsLabel || 'views';

    return `
      <div onclick="jumpToPlatform('${plat.id}')" class="bg-white hover:bg-slate-100 border border-slate-200 rounded-xl p-3.5 cursor-pointer transition group shadow-sm">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-900 group-hover:text-shacman-blue transition">${plat.label}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full border ${plat.bg}">${pPosts.length} post</span>
        </div>
        <div class="text-base font-bold text-slate-900">${formatNum(pViews)} <span class="text-[10px] font-normal text-slate-500">${viewsLabel}</span></div>
        <div class="flex items-center justify-between text-[11px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200">
          <span>Eng: <strong class="text-slate-900">${formatNum(pEng)}</strong></span>
          <span class="text-amber-600 font-semibold">${fInfo.growth ? '+' + formatNum(fInfo.growth) : 'n/a'} flw</span>
        </div>
      </div>
    `;
  }).join('');

  // Upcoming Plans List
  const upcomingEl = document.getElementById('dash-upcoming-list');
  const sortedPlans = [...plans].sort((a, b) => a.date.localeCompare(b.date));
  if (!sortedPlans.length) {
    upcomingEl.innerHTML = `<div class="text-xs text-slate-400 py-8 text-center">Belum ada jadwal di periode ini.</div>`;
  } else {
    upcomingEl.innerHTML = sortedPlans.slice(0, 6).map(plan => {
      const st = PLAN_STATUSES.find(s => s.id === plan.status) || PLAN_STATUSES[0];
      return `
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="text-[10px] font-bold text-amber-600">${plan.date}</span>
              ${pillarBadge(plan.pillar)}
            </div>
            <div class="text-xs font-semibold text-slate-900 truncate">${plan.title}</div>
            <div class="text-[10px] text-slate-500 mt-0.5">${(plan.platforms || []).join(', ')}</div>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${st.badge}">${plan.status}</span>
        </div>
      `;
    }).join('');
  }

  // Render Chart using Official Brand Colors (#0061ab Primary Blue & #f2b705 Tertiary Amber)
  const ctx = document.getElementById('dashPlatformChart');
  if (ctx) {
    const labels = PLATFORMS.map(p => p.label);
    const viewsData = PLATFORMS.map(plat => {
      const c = getChannel(plat.id);
      return (isAll && c.views !== undefined) ? c.views : posts.filter(p => p.platform === plat.id).reduce((s, p) => s + Number(p.views || 0), 0);
    });
    const engData = PLATFORMS.map(plat => {
      const c = getChannel(plat.id);
      return (isAll && c.engagement !== undefined) ? c.engagement : posts.filter(p => p.platform === plat.id).reduce((s, p) => s + calcEngagement(p), 0);
    });

    if (dashChartInstance) dashChartInstance.destroy();
    dashChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Total Views (#0061ab)',
            data: viewsData,
            backgroundColor: '#0061ab',
            borderColor: '#38bdf8',
            borderWidth: 1,
            borderRadius: 6
          },
          {
            label: 'Total Engagement (#f2b705)',
            data: engData,
            backgroundColor: '#f2b705',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#334155', font: { size: 11 } } }
        },
        scales: {
          x: { ticks: { color: '#64748b', font: { size: 11 } }, grid: { color: 'rgba(148, 163, 184, 0.25)' } },
          y: { ticks: { color: '#64748b', font: { size: 11 } }, grid: { color: 'rgba(148, 163, 184, 0.25)' } }
        }
      }
    });
  }
}

function jumpToPlatform(platformId) {
  state.selectedPlatformFilter = platformId;
  switchTab('post-data');
}

// =========================================================
// TAB 2: CONTENT PLAN (KANBAN, TABLE, CALENDAR)
// =========================================================
// =========================================================
// CONTENT PLAN: CAPTION PER PLATFORM, LINK ASET & TAMPILAN MINGGUAN
// Batas karakter: Instagram 2.200; LinkedIn 3.000; TikTok 4.000 (2.200 bila lewat penjadwal);
// YouTube judul 100 & deskripsi 5.000; Threads 500. Facebook tanpa batas praktis.
// =========================================================
const CAPTION_FIELDS = [
  { key: 'igfb', platforms: ['Instagram', 'Facebook Page'], limit: 2200, rows: 4 },
  { key: 'fb', label: 'Facebook', platforms: ['Facebook Page'], limit: null, rows: 4, fbOnly: true },
  { key: 'linkedin', label: 'LinkedIn (Inggris)', platforms: ['LinkedIn Page'], limit: 3000, rows: 4 },
  { key: 'tiktok', label: 'TikTok', platforms: ['TikTok'], limit: 4000, rows: 3, note: '2.200 bila diunggah lewat aplikasi penjadwal' },
  { key: 'ytsTitle', label: 'YouTube Shorts — Judul', platforms: ['YT Shorts'], limit: 100, rows: 1 },
  { key: 'ytsDesc', label: 'YouTube Shorts — Deskripsi', platforms: ['YT Shorts'], limit: 5000, rows: 3 },
  { key: 'ytTitle', label: 'YouTube — Judul', platforms: ['YouTube'], limit: 100, rows: 1 },
  { key: 'ytDesc', label: 'YouTube — Deskripsi', platforms: ['YouTube'], limit: 5000, rows: 4 },
];
let planDraftCaptions = {};
let planDraftAssets = [];
let planDraftFbSeparate = false;
let planWeekStart = null;

// ---- Threads (utas) di Content Plan ----
const THREAD_ATTACH_TYPES = [
  { id: 'none', label: 'Tanpa media', format: 'Thread / Text' },
  { id: 'photo', label: 'Foto', format: 'tanpa label video (gambar/teks)' },
  { id: 'video', label: 'Video', format: 'video' },
  { id: 'carousel', label: 'Carousel campuran', format: 'carousel dokumen' },
  { id: 'text', label: 'Text attachment', format: 'Thread / Text' }
];
let planDraftThreads = { topic: '', posts: [{ text: '', attachType: 'none', attachCount: 0, assets: [] }] };

function newThreadPost() { return { text: '', attachType: 'none', attachCount: 0, assets: [] }; }
function threadsReady(th) { return !!(th && th.posts && th.posts.length && th.posts.every(p => String(p.text || '').trim())); }
function threadsSummary(th) {
  if (!th || !th.posts) return '';
  return `Utas · ${th.posts.length} post` + (th.topic ? ` · Topik: ${th.topic}` : '');
}
function threadPostCount(i) {
  const p = planDraftThreads.posts[i];
  const out = document.getElementById('thrc_' + i);
  if (!p || !out) return;
  const n = (p.text || '').length;
  out.textContent = `${n} / 500`;
  out.className = 'text-[10px] ' + (n > 500 ? 'text-rose-600 font-bold' : 'text-slate-500');
}
function setThreadText(i, v) { planDraftThreads.posts[i].text = v; threadPostCount(i); }
function setThreadField(i, field, v) {
  const p = planDraftThreads.posts[i];
  if (field === 'attachCount') p.attachCount = Number(v) || 0;
  else p[field] = v;
  if (field === 'attachType') renderPlanCaptionFields();
}
function toggleThreadAsset(i, assetIdx, checked) {
  const p = planDraftThreads.posts[i];
  p.assets = (p.assets || []).filter(x => x !== assetIdx);
  if (checked) p.assets.push(assetIdx);
}
function addThreadPost() { syncPlanCaptionDraft(); planDraftThreads.posts.push(newThreadPost()); renderPlanCaptionFields(); }
function removeThreadPost(i) {
  if (planDraftThreads.posts.length <= 1) { showToast('Utas minimal punya 1 post.'); return; }
  syncPlanCaptionDraft(); planDraftThreads.posts.splice(i, 1); renderPlanCaptionFields();
}
function moveThreadPost(i, dir) {
  const j = i + dir, arr = planDraftThreads.posts;
  if (j < 0 || j >= arr.length) return;
  syncPlanCaptionDraft(); [arr[i], arr[j]] = [arr[j], arr[i]]; renderPlanCaptionFields();
}
function copyThreadPost(i) {
  const t = (planDraftThreads.posts[i] || {}).text;
  if (t && t.trim()) copyText(t); else showToast('Teks post masih kosong.');
}
function renderThreadsBlock() {
  const th = planDraftThreads;
  const esc = t => String(t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const assets = planDraftAssets.map((a, idx) => ({ ...a, idx })).filter(a => String(a.url || a.label || '').trim());
  return `
    <div class="p-3 rounded-xl border border-purple-200 bg-purple-50/40 space-y-3">
      <div class="flex items-center justify-between">
        <div class="text-slate-900 font-bold">Threads</div>
        <span class="text-[10px] text-slate-500">Maks 500 karakter per post · 1 topik · carousel maks 20 media</span>
      </div>
      <div>
        <label class="text-slate-700 font-medium">Topik (opsional)</label>
        <input type="text" maxlength="50" value="${esc(th.topic)}" oninput="planDraftThreads.topic=this.value" placeholder="mis. TrukIndonesia" class="w-full mt-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900">
      </div>
      ${th.posts.map((p, i) => `
        <div class="bg-white border border-slate-200 rounded-xl p-3 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-slate-700">Post ${i + 1}${i === 0 ? ' (pembuka)' : ''}</span>
            <div class="flex items-center gap-1.5">
              <span id="thrc_${i}" class="text-[10px] text-slate-500"></span>
              <button type="button" onclick="copyThreadPost(${i})" class="text-[10px] px-2 py-0.5 rounded border border-slate-200 text-slate-600 hover:text-shacman-blue">Salin</button>
              <button type="button" onclick="moveThreadPost(${i}, -1)" title="Naik" class="text-[10px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-600 ${i === 0 ? 'opacity-40' : ''}">↑</button>
              <button type="button" onclick="moveThreadPost(${i}, 1)" title="Turun" class="text-[10px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-600 ${i === th.posts.length - 1 ? 'opacity-40' : ''}">↓</button>
              <button type="button" onclick="removeThreadPost(${i})" title="Hapus post" class="text-[10px] px-1.5 py-0.5 rounded border border-slate-200 text-rose-600">✕</button>
            </div>
          </div>
          <textarea rows="3" oninput="setThreadText(${i}, this.value)" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900">${esc(p.text)}</textarea>
          <div class="flex flex-wrap items-center gap-2">
            <select onchange="setThreadField(${i}, 'attachType', this.value)" class="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-slate-900">
              ${THREAD_ATTACH_TYPES.map(t => `<option value="${t.id}" ${p.attachType === t.id ? 'selected' : ''}>${t.label}</option>`).join('')}
            </select>
            ${['photo', 'video', 'carousel'].includes(p.attachType) ? `<label class="flex items-center gap-1 text-[11px] text-slate-600">Jumlah <input type="number" min="1" max="20" value="${p.attachCount || ''}" oninput="setThreadField(${i}, 'attachCount', this.value)" class="w-16 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-slate-900"></label>` : ''}
          </div>
          ${p.attachType !== 'none' ? `<div class="flex flex-wrap gap-2 text-[11px] text-slate-600">${assets.length ? 'Aset: ' + assets.map(a => `<label class="flex items-center gap-1"><input type="checkbox" ${(p.assets || []).includes(a.idx) ? 'checked' : ''} onchange="toggleThreadAsset(${i}, ${a.idx}, this.checked)" class="accent-[#0061ab]"> ${esc(a.label || 'Aset ' + (a.idx + 1))}</label>`).join('') : '<span class="text-slate-400">Tambahkan link di bagian Link Aset untuk memilih aset.</span>'}</div>` : ''}
        </div>`).join('')}
      <button type="button" onclick="addThreadPost()" class="text-[11px] px-2.5 py-1 rounded-lg border border-slate-200 text-shacman-blue hover:border-shacman-blue">+ Tambah post ke utas</button>
    </div>`;
}



function requiredCaptionFields(platforms, fbSeparate) {
  const ps = platforms || [];
  const hasIG = ps.includes('Instagram'), hasFB = ps.includes('Facebook Page');
  return CAPTION_FIELDS.filter(f => {
    if (f.key === 'igfb') return hasIG || hasFB;
    if (f.key === 'fb') return hasIG && hasFB && fbSeparate;
    return f.platforms.some(p => ps.includes(p));
  }).map(f => {
    if (f.key !== 'igfb') return f;
    const label = hasIG && hasFB ? (fbSeparate ? 'Instagram' : 'Instagram & Facebook') : (hasIG ? 'Instagram' : 'Facebook');
    return { ...f, label, limit: hasIG ? 2200 : null };
  });
}

function captionStatus(plan) {
  const req = requiredCaptionFields(plan.platforms, plan.fbSeparate);
  const caps = plan.captions || {};
  let filled = req.filter(f => String(caps[f.key] || '').trim()).length, total = req.length;
  if ((plan.platforms || []).includes('Threads')) { total++; if (threadsReady(plan.threads)) filled++; }
  return { filled, total };
}

function planReadyBadge(plan) {
  const c = captionStatus(plan);
  const assets = (plan.assets || []).filter(a => a.url).length;
  const done = c.total > 0 && c.filled === c.total;
  return `<span class="inline-block text-[10px] px-2 py-0.5 rounded border ${done ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}">Caption ${c.filled}/${c.total} · ${assets} aset</span>`;
}

function captionForPlatform(plan, platform) {
  const c = plan.captions || {};
  switch (platform) {
    case 'Instagram': return c.igfb || '';
    case 'Facebook Page': return (plan.fbSeparate && c.fb) ? c.fb : (c.igfb || '');
    case 'LinkedIn Page': return c.linkedin || '';
    case 'TikTok': return c.tiktok || '';
    case 'YT Shorts': return [c.ytsTitle, c.ytsDesc].filter(Boolean).join('\n');
    case 'YouTube': return [c.ytTitle, c.ytDesc].filter(Boolean).join('\n');
    case 'Threads': return ((plan.threads && plan.threads.posts) || []).map(p => p.text).filter(Boolean).join(' / ');
    default: return '';
  }
}

function syncPlanCaptionDraft() {
  CAPTION_FIELDS.forEach(f => {
    const el = document.getElementById('cap_' + f.key);
    if (el) planDraftCaptions[f.key] = el.value;
  });
}

function refreshPlanCaptions() {
  syncPlanCaptionDraft();
  renderPlanCaptionFields();
}

function togglePlanFbSeparate(checked) {
  syncPlanCaptionDraft();
  planDraftFbSeparate = !!checked;
  if (checked && !planDraftCaptions.fb) planDraftCaptions.fb = planDraftCaptions.igfb || '';
  renderPlanCaptionFields();
}

function updateCapCount(key, limit) {
  const el = document.getElementById('cap_' + key);
  const out = document.getElementById('capc_' + key);
  if (!el || !out) return;
  const n = el.value.length;
  out.textContent = limit ? `${formatNum(n)} / ${formatNum(limit)}` : `${formatNum(n)} karakter`;
  out.className = 'text-[10px] ' + (limit && n > limit ? 'text-rose-600 font-bold' : 'text-slate-500');
}

function copyPlanCaption(key) {
  const el = document.getElementById('cap_' + key);
  if (el && el.value.trim()) copyText(el.value); else showToast('Caption masih kosong.');
}

function renderPlanCaptionFields() {
  const box = document.getElementById('planCaptionFields');
  if (!box) return;
  const platforms = Array.from(document.querySelectorAll('input[name="planPlatformItem"]:checked')).map(el => el.value);
  const fields = requiredCaptionFields(platforms, planDraftFbSeparate);
  const both = platforms.includes('Instagram') && platforms.includes('Facebook Page');
  const esc = t => String(t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  box.innerHTML = (fields.length || platforms.includes('Threads') ? '' : '<div class="text-[11px] text-slate-500">Pilih platform dulu untuk menampilkan kolom caption.</div>') +
    (both ? `<label class="flex items-center gap-2 text-[11px] text-slate-600"><input type="checkbox" ${planDraftFbSeparate ? 'checked' : ''} onchange="togglePlanFbSeparate(this.checked)" class="accent-[#0061ab]"> Caption Facebook beda dari Instagram</label>` : '') +
    fields.map(f => `
      <div>
        <div class="flex items-center justify-between mb-1">
          <label class="text-slate-700 font-medium">${f.label}</label>
          <div class="flex items-center gap-2">
            <span id="capc_${f.key}" class="text-[10px] text-slate-500"></span>
            <button type="button" onclick="copyPlanCaption('${f.key}')" class="text-[10px] px-2 py-0.5 rounded border border-slate-200 text-slate-600 hover:text-shacman-blue hover:border-shacman-blue">Salin</button>
          </div>
        </div>
        ${f.rows === 1
          ? `<input type="text" id="cap_${f.key}" value="${esc(planDraftCaptions[f.key]).replace(/"/g, '&quot;')}" oninput="updateCapCount('${f.key}', ${f.limit || 0})" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900">`
          : `<textarea id="cap_${f.key}" rows="${f.rows}" oninput="updateCapCount('${f.key}', ${f.limit || 0})" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900">${esc(planDraftCaptions[f.key])}</textarea>`}
        ${f.note ? `<div class="text-[10px] text-slate-400 mt-0.5">${f.note}</div>` : ''}
      </div>`).join('');
  if (platforms.includes('Threads')) box.insertAdjacentHTML('beforeend', renderThreadsBlock());
  fields.forEach(f => updateCapCount(f.key, f.limit || 0));
  planDraftThreads.posts.forEach((_, i) => threadPostCount(i));
}

function renderPlanAssets() {
  const box = document.getElementById('planAssetList');
  if (!box) return;
  const esc = t => String(t || '').replace(/"/g, '&quot;');
  box.innerHTML = planDraftAssets.length ? planDraftAssets.map((a, i) => `
    <div class="flex items-center gap-2">
      <input type="text" value="${esc(a.label)}" placeholder="Label (mis. Folder Drive)" oninput="planDraftAssets[${i}].label=this.value" onchange="refreshPlanCaptions()" class="w-36 shrink-0 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900">
      <input type="url" value="${esc(a.url)}" placeholder="https://..." oninput="planDraftAssets[${i}].url=this.value" class="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900">
      <button type="button" onclick="openPlanAsset(${i})" title="Buka link" class="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-shacman-blue"><i data-lucide="external-link" class="w-3.5 h-3.5"></i></button>
      <button type="button" onclick="removePlanAsset(${i})" title="Hapus" class="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-rose-700"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
    </div>`).join('') : '<div class="text-[11px] text-slate-500">Belum ada link aset.</div>';
  if (window.lucide) lucide.createIcons();
}
function addPlanAsset() { planDraftAssets.push({ label: '', url: '' }); renderPlanAssets(); refreshPlanCaptions(); }
function removePlanAsset(i) {
  planDraftAssets.splice(i, 1);
  planDraftThreads.posts.forEach(p => { p.assets = (p.assets || []).filter(x => x !== i).map(x => x > i ? x - 1 : x); });
  renderPlanAssets();
  refreshPlanCaptions();
}
function openPlanAsset(i) {
  const u = (planDraftAssets[i] || {}).url;
  if (!u) { showToast('Isi link dulu.'); return; }
  window.open(/^https?:\/\//i.test(u) ? u : 'https://' + u, '_blank');
}
function openSavedAsset(planId, i) {
  const p = state.plans.find(x => x.id === planId);
  const u = p && p.assets && p.assets[i] && p.assets[i].url;
  if (u) window.open(/^https?:\/\//i.test(u) ? u : 'https://' + u, '_blank');
}

// ---- Tampilan mingguan ----
const DAY_NAMES_ID = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
const MONTH_SHORT_ID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
function mondayOf(d) { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
function isoDate(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function changePlanWeek(offset) {
  if (offset === 0 || !planWeekStart) planWeekStart = mondayOf(new Date());
  if (offset) { const d = new Date(planWeekStart); d.setDate(d.getDate() + offset * 7); planWeekStart = d; }
  renderPlanWeek();
}
function renderPlanWeek() {
  const grid = document.getElementById('plan-week-grid');
  if (!grid) return;
  if (!planWeekStart) planWeekStart = mondayOf(new Date());
  const pillar = document.getElementById('planFilterPillar')?.value || 'ALL';
  const days = [...Array(7)].map((_, i) => { const d = new Date(planWeekStart); d.setDate(d.getDate() + i); return d; });
  const todayKey = isoDate(new Date());
  const f = d => `${d.getDate()} ${MONTH_SHORT_ID[d.getMonth()]}`;
  const weekPlans = state.plans.filter(p => p.date >= isoDate(days[0]) && p.date <= isoDate(days[6]) && (pillar === 'ALL' || p.pillar === pillar));
  const ready = weekPlans.filter(p => { const c = captionStatus(p); return c.total > 0 && c.filled === c.total; }).length;
  document.getElementById('planWeekLabel').innerHTML = `<div class="text-sm font-bold text-slate-900">${f(days[0])} – ${f(days[6])} ${days[6].getFullYear()}</div><div class="text-[11px] text-slate-500">${weekPlans.length} rencana · caption lengkap ${ready}/${weekPlans.length}</div>`;
  grid.innerHTML = days.map((d, i) => {
    const key = isoDate(d);
    const list = weekPlans.filter(p => p.date === key);
    return `
      <div class="bg-white border ${key === todayKey ? 'border-shacman-blue' : 'border-slate-200'} rounded-2xl p-3 flex flex-col min-h-[200px]">
        <div class="flex items-center justify-between mb-2">
          <div><div class="text-xs font-bold ${key === todayKey ? 'text-shacman-blue' : 'text-slate-900'}">${DAY_NAMES_ID[i]}</div><div class="text-[11px] text-slate-500">${f(d)}</div></div>
          <button onclick="openPlanModal(null, '${key}')" title="Tambah rencana" class="w-7 h-7 rounded-lg border border-slate-200 text-slate-600 hover:text-shacman-blue hover:border-shacman-blue flex items-center justify-center text-base leading-none">+</button>
        </div>
        <div class="space-y-2 flex-1">
          ${list.map(plan => {
            const st = PLAN_STATUSES.find(s => s.id === plan.status) || PLAN_STATUSES[0];
            return `
            <button onclick="event.stopPropagation(); openPlanModal('${plan.id}')" class="w-full text-left bg-slate-50 border border-slate-200 hover:border-shacman-blue rounded-xl p-2.5 space-y-1.5 transition">
              <div class="text-xs font-bold text-slate-900 leading-snug">${plan.title}</div>
              <div class="flex flex-wrap gap-1">${pillarBadge(plan.pillar)}<span class="text-[10px] px-1.5 py-0.5 rounded-full border ${st.badge}">${plan.status}</span></div>
              <div class="text-[10px] text-slate-500">${(plan.platforms || []).map(pl => getPlatformMeta(pl).label).join(' · ')}</div>
              <div class="flex flex-wrap gap-1">${planReadyBadge(plan)}${planRecordBadge(plan)}</div>
            </button>`;
          }).join('') || '<div class="text-[11px] text-slate-400">Kosong</div>'}
        </div>
      </div>`;
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// ---- Bank Ide: status dijadwalkan ----
function ideaScheduledPlan(idea) {
  return idea.scheduledPlanId ? state.plans.find(p => p.id === idea.scheduledPlanId) : null;
}
function ideaScheduledBadge(idea) {
  const p = ideaScheduledPlan(idea);
  return p
    ? `<span class="text-[10px] px-2 py-0.5 rounded border bg-emerald-50 text-emerald-700 border-emerald-200 truncate">Dijadwalkan · ${p.date}</span>`
    : `<span class="text-[10px] text-slate-500 truncate">${idea.pillar}</span>`;
}

function setPlanView(view) {
  state.planView = view;
  ['week', 'kanban', 'table', 'calendar'].forEach(v => {
    const btn = document.getElementById(`plan-view-${v}`);
    const container = document.getElementById(`plan-${v}-container`);
    if (v === view) {
      btn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-shacman-blue text-white transition';
      container.classList.remove('hidden');
    } else {
      btn.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-shacman-blue transition';
      container.classList.add('hidden');
    }
  });
  renderContentPlan();
}

function getFilteredPlans() {
  const pillar = document.getElementById('planFilterPillar')?.value || 'ALL';

  return state.plans.filter(p => {
    if (!matchesGlobalMonth(p.date)) return false;
    if (pillar !== 'ALL' && p.pillar !== pillar) return false;
    return true;
  }).sort((a, b) => a.date.localeCompare(b.date));
}

function renderContentPlan() {
  const plans = getFilteredPlans();
  renderPlanWeek();

  // 1. Kanban Render
  const kanbanEl = document.getElementById('plan-kanban-container');
  kanbanEl.innerHTML = PLAN_STATUSES.map(statusObj => {
    const colPlans = plans.filter(p => p.status === statusObj.id);
    return `
      <div class="bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col h-full min-h-[420px]">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
          <span class="text-xs font-bold text-slate-900">${statusObj.label}</span>
          <span class="text-[11px] px-2 py-0.5 rounded-full border ${statusObj.badge}">${colPlans.length}</span>
        </div>
        <div class="space-y-3 flex-1">
          ${colPlans.map(plan => `
            <div onclick="openPlanModal('${plan.id}')" class="bg-slate-50 border border-slate-200 hover:border-shacman-blue hover:shadow-sm cursor-pointer rounded-xl p-3 space-y-2 transition">
              <div class="flex items-center justify-between text-[10px]">
                <span class="text-amber-600 font-bold">${plan.date}</span>
                ${pillarBadge(plan.pillar)}
              </div>
              <div class="text-xs font-bold text-slate-900 leading-snug">${plan.title}</div>
              <div class="text-[11px] text-slate-500 line-clamp-2">${plan.brief || '-'}</div>
              <div class="flex flex-wrap gap-1 pt-1">
                ${(plan.platforms || []).map(pl => {
                  const pm = getPlatformMeta(pl);
                  return `<span class="text-[10px] px-1.5 py-0.5 rounded border ${pm.bg}">${pl}</span>`;
                }).join('')}
              </div>
              <div class="flex flex-wrap gap-1">${planReadyBadge(plan)}${planRecordBadge(plan)}</div>
              <div class="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>PIC: <strong class="text-slate-900">${plan.pic || '-'}</strong></span>
                <div class="flex items-center gap-1">
                  ${(plan.status !== 'Published' || pendingPlatformsOf(plan).length) ? `
                    <button onclick="event.stopPropagation(); convertPlanToPost('${plan.id}')" title="Tandai Tayang & Masukkan ke Post Data Medsos" class="px-1.5 py-1 rounded bg-amber-50 text-amber-600 hover:bg-amber-100 text-[10px] font-bold">
                      +Tayang
                    </button>
                  ` : ''}
                  <button onclick="event.stopPropagation(); openPlanModal('${plan.id}')" class="p-1 text-slate-600 hover:text-shacman-blue"><i data-lucide="edit-3" class="w-3.5 h-3.5"></i></button>
                  <button onclick="event.stopPropagation(); deletePlan('${plan.id}')" class="p-1 text-slate-600 hover:text-rose-700"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // 2. Table Render
  const tbody = document.getElementById('plan-table-body');
  if (!plans.length) {
    tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-400">Tidak ada jadwal konten yang sesuai filter.</td></tr>`;
  } else {
    tbody.innerHTML = plans.map(plan => {
      const st = PLAN_STATUSES.find(s => s.id === plan.status) || PLAN_STATUSES[0];
      return `
        <tr onclick="openPlanModal('${plan.id}')" class="hover:bg-blue-50/60 cursor-pointer">
          <td class="py-3 px-4 font-bold text-amber-600 whitespace-nowrap">${plan.date}</td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${plan.title}</div>
            <div class="text-[11px] text-slate-500">${plan.brief || ''}</div>
            <div class="mt-1">${planReadyBadge(plan)} ${planRecordBadge(plan)}${(plan.assets || []).filter(a => a.url).map((a, i) => ` <button onclick="event.stopPropagation(); openSavedAsset('${plan.id}', ${i})" class="text-[10px] text-shacman-blue underline ml-1">${a.label || 'Aset ' + (i + 1)}</button>`).join('')}</div>
          </td>
          <td class="py-3 px-4">
            ${pillarBadge(plan.pillar, true)}
          </td>
          <td class="py-3 px-4">
            <div class="flex flex-wrap gap-1">
              ${(plan.platforms || []).map(pl => `<span class="text-[10px] px-1.5 py-0.5 rounded border ${getPlatformMeta(pl).bg}">${pl}</span>`).join('')}
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="text-slate-900">${plan.format}</div>
            <div class="text-[11px] text-slate-500">PIC: ${plan.pic || '-'}</div>
          </td>
          <td class="py-3 px-4">
            <span class="text-[10px] px-2.5 py-1 rounded-full border font-semibold whitespace-nowrap ${st.badge}">${plan.status}</span>
          </td>
          <td class="py-3 px-4 text-right whitespace-nowrap">
            <button onclick="event.stopPropagation(); convertPlanToPost('${plan.id}')" class="px-2 py-1 rounded bg-amber-50 text-amber-600 hover:bg-amber-100 text-[10px] font-bold mr-1">Catat Metrik</button>
            <button onclick="event.stopPropagation(); openPlanModal('${plan.id}')" class="p-1.5 text-slate-600 hover:text-shacman-blue"><i data-lucide="edit-3" class="w-4 h-4 inline"></i></button>
            <button onclick="event.stopPropagation(); deletePlan('${plan.id}')" class="p-1.5 text-slate-600 hover:text-rose-700"><i data-lucide="trash-2" class="w-4 h-4 inline"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 3. Calendar Render
  renderCalendarGrid();
  lucide.createIcons();
}

function changeCalendarMonth(offset) {
  calendarDate.setMonth(calendarDate.getMonth() + offset);
  renderCalendarGrid();
}

function renderCalendarGrid() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const ymPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;
  document.getElementById('calendarMonthLabel').innerText = formatMonthLabel(ymPrefix);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = '';
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="min-h-[95px] rounded-xl bg-slate-50 border border-slate-200 p-2"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${ymPrefix}-${String(d).padStart(2, '0')}`;
    const dayPlans = state.plans.filter(p => p.date === dateStr);
    html += `
      <div class="min-h-[95px] rounded-xl bg-slate-50 border border-slate-200 p-2 flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-700">${d}</span>
          <button onclick="openPlanModal(null, '${dateStr}')" class="text-[10px] text-shacman-blue hover:text-shacman-blue font-semibold">+Plan</button>
        </div>
        <div class="space-y-1 mt-1">
          ${dayPlans.map(dp => `
            <div onclick="openPlanModal('${dp.id}')" class="text-[10px] p-1 rounded bg-blue-50 border border-shacman-blue text-slate-900 truncate cursor-pointer hover:bg-blue-100" title="${dp.title}">
              <strong class="text-amber-600">[${(PILLAR_INFO[dp.pillar] || {}).short || '-'}]</strong> ${dp.title}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  document.getElementById('calendar-grid').innerHTML = html;
}

// =========================================================
// TAB 3: BANK IDE & SMART SHACMAN 2026 GENERATOR
// =========================================================
function renderIdeaBank() {
  const q = (document.getElementById('ideaSearch')?.value || '').toLowerCase();
  const pillar = document.getElementById('ideaFilterPillar')?.value || 'ALL';
  const prio = document.getElementById('ideaFilterPriority')?.value || 'ALL';
  const sched = document.getElementById('ideaFilterStatus')?.value || 'ALL';

  const filtered = state.ideas.filter(item => {
    if (pillar !== 'ALL' && item.pillar !== pillar) return false;
    if (prio !== 'ALL' && item.priority !== prio) return false;
    if (sched === 'SCHEDULED' && !ideaScheduledPlan(item)) return false;
    if (sched === 'UNSCHEDULED' && ideaScheduledPlan(item)) return false;
    if (q && !(`${item.title} ${item.hook} ${item.pillar} ${item.notes}`.toLowerCase().includes(q))) return false;
    return true;
  });

  const grid = document.getElementById('idea-grid');
  if (!filtered.length) {
    grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400 text-xs">Belum ada ide yang cocok. Klik "Auto-Generate Ide dari Katalog 2026" atau tambah ide baru!</div>`;
    return;
  }

  grid.innerHTML = filtered.map(idea => {
    const prioBadge = idea.priority === 'High'
      ? 'bg-amber-50 text-amber-600 border-amber-300'
      : idea.priority === 'Medium'
        ? 'bg-blue-50 text-slate-600 border-shacman-blue'
        : 'bg-slate-50 text-slate-600 border-slate-200';

    return `
      <div onclick="openIdeaModal('${idea.id}')" class="bg-white border border-slate-200 hover:border-shacman-blue hover:shadow-md cursor-pointer rounded-2xl p-5 flex flex-col justify-between space-y-4 transition shadow-sm">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] px-2.5 py-0.5 rounded-full border font-bold ${prioBadge}">${idea.priority} Priority</span>
            ${pillarBadge(idea.pillar)}
          </div>
          <h4 class="text-sm font-bold text-slate-900 leading-snug">${idea.title}</h4>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-amber-600 italic">
            <strong>Hook 3 Detik:</strong> ${idea.hook}
          </div>
          <div class="text-xs text-slate-700 leading-relaxed">${idea.notes || '-'}</div>
        </div>

        <div class="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
          ${ideaScheduledBadge(idea)}
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="event.stopPropagation(); convertIdeaToPlan('${idea.id}')" class="px-3 py-1.5 rounded-lg bg-shacman-blue hover:bg-[#0073cc] text-white text-[11px] font-bold flex items-center gap-1 transition">
              <i data-lucide="calendar-plus" class="w-3.5 h-3.5 text-amber-600"></i> Jadwalkan
            </button>
            <button onclick="event.stopPropagation(); openIdeaModal('${idea.id}')" class="p-1.5 rounded-lg bg-slate-50 text-slate-600 hover:text-shacman-blue border border-slate-200"><i data-lucide="edit-3" class="w-3.5 h-3.5"></i></button>
            <button onclick="event.stopPropagation(); deleteIdea('${idea.id}')" class="p-1.5 rounded-lg bg-slate-50 text-slate-500 hover:text-rose-700 border border-slate-200"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

function generateSmartShacmanIdea() {
  const templates = [
    {
      title: 'Bedah Mesin Gas LNG 590 HP Shacman (Efisiensi Termal 54.16%): Lulus Uji Jatuh 9 Meter & Pembakaran 550°C!',
      hook: '"Siapa bilang truk CNG/LNG kurang aman? Tabung Shacman sudah lulus uji jatuh ekstrem 9 meter & api 550°C!"',
      pillar: 'Product Introduction',
      priority: 'High',
      notes: 'Sumber: 2026 Inside SHACMAN hal. 3 (Multi-Powertrain Matrix - Natural Gas Pioneer Since 2005).'
    },
    {
      title: 'Kenapa Shacman M6000 Jadi Truk Kargo Flat-Floor Langka di Kelas 18–25 Ton?',
      hook: '"Kabin lantai rata biasanya cuma ada di tractor head flagship, tapi Shacman menghadirkannya di truk kargo M6000!"',
      pillar: 'Product Introduction',
      priority: 'Medium',
      notes: 'Sumber: 2026 Universal Foldout hal. 3 (WP7H 300-350 PS + AMT 8/9 untuk intercity express & cold-chain).'
    },
    {
      title: 'Zero Breakdown di Suhu -40°C! Kisah Armada Coca-Cola Menggunakan Shacman X6000 & Telematics',
      hook: '"Jalanan es minus 40 derajat Celcius, muatan botol kaca, tapi Fleet Uptime tembus 98.5% tanpa mogok!"',
      pillar: 'Customer & Field Activities',
      priority: 'High',
      notes: 'Sumber: 2026 Inside SHACMAN hal. 5 (Proven Worldwide Case - Ultimate Stability in Mongolia).'
    },
    {
      title: 'Mengenal 3-Tier Accessory Guarantee & 60+ Gudang Suku Cadang Resmi Shacman CARE',
      hook: '"Beli truk tambang itu beli kepastian suku cadang! Begini sistem jaminan 3-lapis sparepart Shacman."',
      pillar: 'Education & Engagement',
      priority: 'High',
      notes: 'Sumber: 2026 Universal Foldout hal. 2 (180+ Accessories Channels, 60+ Warehouses, 120+ Dealerships).'
    },
    {
      title: 'Shacman H6000 Dump Truck (440–560 HP): Kombinasi Gardan 16T Double-Stage & Kenyamanan Seri 6000',
      hook: '"Butuh dump truck sekuat tank di tambang tapi senyaman sedan Eropa buat operator? Ini jawabannya!"',
      pillar: 'Product Introduction',
      priority: 'Medium',
      notes: 'Sumber: 2026 Universal Foldout hal. 4 (H6000 6x4/8x4 GVW 50-70T, WP13/M13/M15).'
    }
  ];

  const pick = templates[Math.floor(Math.random() * templates.length)];
  state.ideas.unshift({
    id: 'idea-' + Date.now(),
    ...pick
  });
  saveState();
  renderIdeaBank();
  showToast('Ide konten baru dari Katalog 2026 berhasil ditambahkan!');
}

// =========================================================
// TAB 4: POST DATA & 7 MEDSOS TRACKER
// =========================================================
function renderPostData() {
  // 1. Platform Filter Pills
  const filterTabs = document.getElementById('platformFilterTabs');
  const allBtnClass = state.selectedPlatformFilter === 'ALL'
    ? 'bg-shacman-blue text-white font-bold border border-blue-200'
    : 'bg-slate-50 text-slate-500 hover:text-shacman-blue border border-transparent';

  filterTabs.innerHTML = `
    <button onclick="setPlatformFilter('ALL')" class="px-3.5 py-1.5 rounded-xl text-xs transition ${allBtnClass}">
      Semua Platform (7)
    </button>
    ${PLATFORMS.map(p => {
      const active = state.selectedPlatformFilter === p.id;
      return `
        <button onclick="setPlatformFilter('${p.id}')" class="px-3.5 py-1.5 rounded-xl text-xs transition flex items-center gap-1.5 ${active ? 'bg-shacman-blue text-white font-bold border border-blue-200' : 'bg-slate-50 text-slate-500 hover:text-shacman-blue'}">
          <span>${p.label}</span>
        </button>
      `;
    }).join('')}
  `;

  // 2. Filter & Sort Posts
  const q = (document.getElementById('postSearchInput')?.value || '').toLowerCase();
  const pillarFilter = document.getElementById('postPillarFilter')?.value || 'ALL';
  const sortBy = document.getElementById('postSortBy')?.value || 'date_desc';

  let posts = state.posts.filter(p => {
    if (!matchesGlobalMonth(p.date)) return false;
    if (state.selectedPlatformFilter !== 'ALL' && p.platform !== state.selectedPlatformFilter) return false;
    if (pillarFilter !== 'ALL' && p.pillar !== pillarFilter) return false;
    if (q && !(`${p.title} ${p.pillar} ${p.platform} ${p.topic || ''} ${p.notes || ''}`.toLowerCase().includes(q))) return false;
    return true;
  });

  posts.sort((a, b) => {
    if (sortBy === 'views_desc') return Number(b.views || 0) - Number(a.views || 0);
    if (sortBy === 'eng_desc') return calcEngagement(b) - calcEngagement(a);
    if (sortBy === 'er_desc') return (calcER(b) || 0) - (calcER(a) || 0);
    return b.date.localeCompare(a.date);
  });

  // 3. Summary Strip
  const totalViews = posts.reduce((s, p) => s + Number(p.views || 0), 0);
  const totalClicks = posts.reduce((s, p) => s + Number(p.clicks || 0), 0);
  const totalLikes = posts.reduce((s, p) => s + Number(p.likes || 0), 0);
  const totalInteractions = posts.reduce((s, p) => s + (p.interactions ? Number(p.interactions) : (Number(p.likes || 0) + Number(p.comments || 0))), 0);
  const totalComments = posts.reduce((s, p) => s + Number(p.comments || 0), 0);
  const totalShares = posts.reduce((s, p) => s + Number(p.shares || 0), 0);
  const avgCtr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(2) : '0.00';

  document.getElementById('post-platform-summary').innerHTML = `
    <div class="bg-white border border-slate-200 rounded-xl p-3">
      <div class="text-[11px] text-slate-500">Total Konten</div>
      <div class="text-lg font-bold text-slate-900">${formatNum(posts.length)} Post</div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3">
      <div class="text-[11px] text-slate-500">Total Views / Plays</div>
      <div class="text-lg font-bold text-shacman-blue">${formatNum(totalViews)}</div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3">
      <div class="text-[11px] text-slate-500">Total Klik (CTR Rata-rata)</div>
      <div class="text-lg font-bold text-emerald-600">${formatNum(totalClicks)} <span class="text-xs font-semibold text-slate-600">(${avgCtr}%)</span></div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3">
      <div class="text-[11px] text-slate-500">Total Reaksi / Interaksi</div>
      <div class="text-lg font-bold text-slate-900">${formatNum(totalInteractions)}</div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3">
      <div class="text-[11px] text-slate-500">Total Shares & Repost</div>
      <div class="text-lg font-bold text-amber-600">${formatNum(totalShares)}</div>
    </div>
  `;

  // 4. Table Rows with Official Shacman Indonesia Logo Thumbnail
  const tbody = document.getElementById('post-table-body');
  if (!posts.length) {
    tbody.innerHTML = `<tr><td colspan="10" class="py-10 text-center text-slate-400">Belum ada data post untuk filter ini.</td></tr>`;
  } else {
    tbody.innerHTML = posts.map(post => {
      const pm = getPlatformMeta(post.platform);
      const erVal = calcER(post);
      const erDisplay = post.metricsPartial || erVal === null ? 'n/a' : `${erVal.toFixed(2)}%`;
      const clickDisplay = post.clicks !== undefined && post.clicks !== null ? `
        <div class="font-bold text-slate-900">${formatNum(post.clicks)}</div>
        <div class="text-[10px] text-shacman-blue font-semibold">${post.ctr !== undefined ? Number(post.ctr).toFixed(2) : (post.views ? ((post.clicks / post.views) * 100).toFixed(2) : '0.00')}% CTR</div>
      ` : `<span class="text-slate-400">-</span>`;

      return `
        <tr class="hover:bg-slate-50">
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-8 rounded-lg bg-white p-1 flex items-center justify-center border border-amber-300 shrink-0 shadow-sm">
                <img src="shacman-logo.png" alt="SHACMAN Indonesia" class="w-full h-full object-contain">
              </div>
              <span class="font-semibold text-slate-600"${post.dateEstimated ? ' title="Tanggal tayang tidak ada di data sumber (perkiraan)"' : ''}>${post.dateEstimated ? '≈ ' : ''}${post.date}</span>
            </div>
          </td>
          <td class="py-3 px-4 whitespace-nowrap">
            <span class="text-[11px] px-2.5 py-1 rounded-full border font-semibold ${pm.bg}">${post.platform}</span>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${post.title}</div>
            <div class="text-[11px] text-slate-500 flex flex-wrap items-center gap-2 mt-0.5">
              ${pillarBadge(post.pillar, true)}${post.topic ? ` <span class="text-[10px] px-2 py-0.5 rounded border bg-purple-50 text-purple-700 border-purple-200">Topik: ${post.topic}</span>` : ''}
              <span>• ${post.format || ''}</span>
            </div>
            ${post.notes ? `<div class="text-[10px] text-amber-700 mt-1 italic"><i data-lucide="info" class="w-3 h-3 inline mr-1"></i>${post.notes}</div>` : ''}
          </td>
          <td class="py-3 px-4 text-right font-bold text-slate-900">${formatNum(post.views)}</td>
          <td class="py-3 px-4 text-right text-slate-700">${clickDisplay}</td>
          <td class="py-3 px-4 text-right text-slate-700">${post.likes ? formatNum(post.likes) : (post.interactions ? `<span title="Total Interaksi Gabungan">${formatNum(post.interactions)}*</span>` : '0')}</td>
          <td class="py-3 px-4 text-right text-slate-700">${formatNum(post.comments || 0)}</td>
          <td class="py-3 px-4 text-right text-slate-700">${formatNum(post.shares || 0)}</td>
          <td class="py-3 px-4 text-right">
            ${post.metricsPartial || erVal === null ? `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs">n/a</span>` : `
              <span class="px-2 py-0.5 rounded bg-amber-50 text-amber-600 font-bold">${erDisplay}</span>
            `}
          </td>
          <td class="py-3 px-4 text-center whitespace-nowrap">
            ${post.link ? `<a href="${post.link}" target="_blank" class="p-1.5 text-shacman-blue hover:text-shacman-blue inline-block" title="Buka Link Post"><i data-lucide="external-link" class="w-4 h-4"></i></a>` : ''}
            <button onclick="openPostModal('${post.id}')" class="p-1.5 text-slate-600 hover:text-shacman-blue inline-block"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
            <button onclick="deletePost('${post.id}')" class="p-1.5 text-slate-600 hover:text-rose-700 inline-block"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  }
  lucide.createIcons();
}

function setPlatformFilter(platformId) {
  state.selectedPlatformFilter = platformId;
  renderPostData();
}

// =========================================================
// TAB 5: MONTHLY REPORT RENDERER
// =========================================================
function renderRealReportSections() {
  // 1. Demographics Grid
  const demoGrid = document.getElementById('report-demographics-grid');
  if (demoGrid && window.LINKEDIN_DEMOGRAPHICS) {
    const d = window.LINKEDIN_DEMOGRAPHICS;
    const tt = window.TIKTOK_AUDIENCE || {};

    const renderBars = (items) => (items || []).slice(0, 5).map(it => `
      <div class="mb-2">
        <div class="flex justify-between text-[11px] mb-0.5">
          <span class="text-slate-700 truncate pr-2" title="${it.name}">${it.name}</span>
          <span class="text-amber-600 font-bold shrink-0">${it.pct}% <span class="text-[10px] text-slate-400">(${it.followers})</span></span>
        </div>
        <div class="w-full bg-white h-1.5 rounded-full overflow-hidden">
          <div class="bg-shacman-blue h-full rounded-full" style="width: ${Math.min(100, it.pct * 3.5)}%"></div>
        </div>
      </div>
    `).join('');

    demoGrid.innerHTML = `
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="briefcase" class="w-3.5 h-3.5 text-shacman-blue"></i> Industri (LinkedIn)</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-sky-50 text-shacman-blue">280 Followers</span>
        </div>
        ${renderBars(d.industri)}
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="award" class="w-3.5 h-3.5 text-amber-600"></i> Senioritas (LinkedIn)</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700">Level Jabatan</span>
        </div>
        ${renderBars(d.seniority)}
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="layers" class="w-3.5 h-3.5 text-emerald-600"></i> Fungsi Kerja (LinkedIn)</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Departemen</span>
        </div>
        ${renderBars(d.fungsi)}
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="video" class="w-3.5 h-3.5 text-rose-600"></i> Profil Audiens TikTok</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-600">194 Followers</span>
          </div>
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-lg bg-white border border-slate-200">
              <div class="text-[10px] text-slate-500">Distribusi Gender & Lokasi</div>
              <div class="font-bold text-slate-900 text-sm mt-0.5">${tt.gender?.pria || 100}% Pria <span class="text-xs font-normal text-shacman-blue">• ${tt.negara?.[0]?.name || 'Indonesia'} (${tt.negara?.[0]?.pct || 99.8}%)</span></div>
            </div>
            <div class="p-2.5 rounded-lg bg-white border border-slate-200">
              <div class="text-[10px] text-slate-500">Waktu Aktivitas Puncak Pengikut</div>
              <div class="font-bold text-amber-600 text-sm mt-0.5">${tt.jamAktifPengikut?.peakHour || '06.00 Pagi'} <span class="text-[10px] font-normal text-slate-600">(Peak Engagement)</span></div>
            </div>
            <div class="p-2 rounded-lg bg-white text-[11px] text-slate-600 border border-slate-200">
              <span class="text-shacman-blue font-bold">Penonton Baru:</span> ${tt.penontonBaruVsLama?.nonPengikutPct || 95.8}% non-pengikut vs ${tt.penontonBaruVsLama?.pengikutPct || 4.2}% pengikut.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Extra Metrics Grid
  const extraGrid = document.getElementById('report-extra-metrics-grid');
  if (extraGrid && window.MONTHLY_TRENDS) {
    const tr = window.MONTHLY_TRENDS;
    const fb = window.FORMAT_BREAKDOWN || {};

    extraGrid.innerHTML = `
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="trending-up" class="w-3.5 h-3.5 text-emerald-600"></i> Tren Bulanan (Agt–Okt 2026)</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">+76.5% Net Growth</span>
        </div>
        <div class="text-xs space-y-2">
          <div class="p-2 rounded-lg bg-white border border-slate-200">
            <div class="text-[10px] text-slate-500 font-bold text-slate-900">Akselerasi LinkedIn (Agt vs Sep 2026)</div>
            <div class="text-slate-900 font-semibold mt-0.5">Tayangan: 1.745 ? <span class="text-emerald-600 font-bold">10.361 (+493.8%)</span></div>
            <div class="text-slate-600 text-[11px]">Reaksi: 19 ? 196 | Followers: 55 ? 276 (+401.8%)</div>
          </div>
          <div class="p-2 rounded-lg bg-white border border-slate-200">
            <div class="text-[10px] text-slate-500 font-bold text-slate-900">Pertambahan Net Followers TikTok</div>
            <div class="text-slate-900 font-semibold mt-0.5">Sep: +24 ? Okt: <span class="text-emerald-600 font-bold">+165 (+587.5%)</span></div>
          </div>
          <div class="text-[11px] text-slate-500 italic">Total gabungan komunitas tumbuh dari 153 ke 270 pengikut dalam periode 3 bulan (+76.5%).</div>
        </div>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="layout-grid" class="w-3.5 h-3.5 text-shacman-blue"></i> Breakdown Format Konten</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-sky-50 text-shacman-blue">Meta Multi-Format</span>
        </div>
        <div class="text-xs space-y-2">
          <div class="p-2 rounded-lg bg-white border border-slate-200">
            <div class="text-[10px] text-slate-500 font-bold text-slate-900 mb-1">Instagram Format Breakdown</div>
            <div class="flex justify-between text-[11px]"><span class="text-slate-600">Reels (Video Pendek):</span><strong class="text-shacman-blue">4.062 views • 154 int.</strong></div>
            <div class="flex justify-between text-[11px]"><span class="text-slate-600">Gambar Feed:</span><strong class="text-slate-700">2.156 views • 59 int.</strong></div>
            <div class="flex justify-between text-[11px]"><span class="text-slate-600">Cerita (Stories 12x):</span><strong class="text-amber-700">469 views • 10 int.</strong></div>
          </div>
          <div class="p-2 rounded-lg bg-white border border-slate-200">
            <div class="text-[10px] text-slate-500 font-bold text-slate-900 mb-1">Facebook Format</div>
            <div class="text-[11px] text-slate-700">Foto Feed: 1.673 views • Cerita: 32x tayang (21 interaksi cerita)</div>
          </div>
        </div>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5"><i data-lucide="play-circle" class="w-3.5 h-3.5 text-rose-600"></i> Video & Lonjakan YouTube</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-600">Shorts Spike</span>
        </div>
        <div class="text-xs space-y-2">
          <div class="p-2 rounded-lg bg-white border border-slate-200">
            <div class="text-[10px] text-slate-500 font-bold text-slate-900">Shorts vs Long Video</div>
            <div class="flex justify-between text-[11px] mt-0.5"><span class="text-slate-600">Shorts:</span><strong class="text-slate-900">5.309 tayangan • 3.900 penonton unik</strong></div>
            <div class="flex justify-between text-[11px]"><span class="text-slate-600">Long Video:</span><strong class="text-slate-500">0 tayangan (belum produksi)</strong></div>
          </div>
          <div class="p-2 rounded-lg bg-white border border-slate-200">
            <div class="text-[10px] text-slate-500 font-bold text-amber-600">Analisis Lonjakan Viral 31 Okt 2026</div>
            <div class="text-[11px] text-slate-700 mt-0.5">5.269 tayangan terjadi dalam 1 hari di tanggal 31 Oktober. Rata-rata durasi tonton 0:21 detik (34.9 jam waktu tonton).</div>
          </div>
        </div>
      </div>
    `;
  }
}

// Daftar lead di laporan bulanan (ikut tercetak)
function renderReportLeads() {
  const box = document.getElementById('report-leads');
  if (!box) return;
  const isAll = !state.selectedMonth || state.selectedMonth === 'ALL';
  const leads = (state.leads || []).filter(l => isAll || monthKey(l.date) === state.selectedMonth).sort((a, b) => a.date.localeCompare(b.date));
  const qualified = leads.filter(l => l.qualified !== false).length;
  const bySource = {};
  leads.forEach(l => { bySource[l.source || 'Lainnya'] = (bySource[l.source || 'Lainnya'] || 0) + 1; });
  const byCompany = {};
  leads.forEach(l => { const c = (l.company || '').trim() || 'Tanpa perusahaan'; byCompany[c] = (byCompany[c] || 0) + 1; });
  const companyList = Object.entries(byCompany).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const title = isAll ? 'Daftar Lead (semua periode)' : `Daftar Lead ${monthLabel(state.selectedMonth)}`;
  box.innerHTML = `
    <h4 class="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2"><i data-lucide="users" class="w-4 h-4 text-shacman-blue"></i> ${title}</h4>
    <div class="flex flex-wrap gap-2 mb-3 text-xs">
      <span class="px-3 py-1 rounded-full border border-slate-200 bg-slate-50"><strong>${leads.length}</strong> lead</span>
      <span class="px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700"><strong>${qualified}</strong> qualified</span>
      ${Object.entries(bySource).map(([s, n]) => `<span class="px-3 py-1 rounded-full border border-slate-200">${escHtml(s)}: <strong>${n}</strong></span>`).join('')}
    </div>
    ${leads.length ? `<div class="mb-3 text-xs"><div class="text-[11px] font-semibold text-slate-600 mb-1.5">Per perusahaan</div><div class="flex flex-wrap gap-2">${companyList.map(([c, n]) => `<span class="px-3 py-1 rounded-full border ${c === 'Tanpa perusahaan' ? 'border-dashed border-slate-300 text-slate-500' : 'border-blue-200 bg-blue-50 text-shacman-blue'}">${escHtml(c)}: <strong>${n}</strong></span>`).join('')}</div></div>` : ''}
    ${leads.length ? `
    <div class="overflow-x-auto">
      <table class="w-full text-xs border border-slate-200">
        <thead class="bg-slate-50 text-[10px] text-slate-600"><tr>
          <th class="text-left py-2 px-2 border-b border-slate-200">Tanggal</th><th class="text-left py-2 px-2 border-b border-slate-200">Sumber</th><th class="text-left py-2 px-2 border-b border-slate-200">Nama</th><th class="text-left py-2 px-2 border-b border-slate-200">Perusahaan</th><th class="text-left py-2 px-2 border-b border-slate-200">Email / akun</th><th class="text-left py-2 px-2 border-b border-slate-200">Keperluan</th><th class="text-left py-2 px-2 border-b border-slate-200">Follow up</th><th class="text-left py-2 px-2 border-b border-slate-200">Status</th>
        </tr></thead>
        <tbody>${leads.map(l => `
          <tr class="border-t border-slate-200 align-top">
            <td class="py-1.5 px-2 whitespace-nowrap">${l.date}</td>
            <td class="py-1.5 px-2 whitespace-nowrap">${escHtml(l.source)}</td>
            <td class="py-1.5 px-2 font-semibold">${escHtml(l.name)}</td>
            <td class="py-1.5 px-2">${escHtml(l.company || '-')}</td>
            <td class="py-1.5 px-2 break-all">${escHtml(l.contact || '-')}</td>
            <td class="py-1.5 px-2">${escHtml(l.purpose || '-')}</td>
            <td class="py-1.5 px-2">${escHtml(l.followUp || '-')}</td>
            <td class="py-1.5 px-2 whitespace-nowrap">${l.qualified !== false ? 'Qualified' : 'Belum qualified'}</td>
          </tr>`).join('')}</tbody>
      </table>
    </div>` : '<div class="text-[11px] text-slate-500">Belum ada lead tercatat di periode ini.</div>'}`;
}

function renderMonthlyReport() {
  updateReportDoneBtn();
  renderReportLeads();
  const posts = state.posts.filter(p => matchesGlobalMonth(p.date));
  const isAll = !state.selectedMonth || state.selectedMonth === 'ALL';
  document.getElementById('reportPeriodLabel').innerText = isAll ? 'Periode Laporan: Semua Periode (data Agustus–Oktober 2026)' : `Periode Laporan: ${formatMonthLabel(state.selectedMonth)}`;
  document.getElementById('reportPrintDate').innerText = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const ch = state.channelStats || {};
  const totalViewsChannel = Object.values(ch).reduce((s, c) => s + Number(c.views || 0), 0);
  const totalReachChannel = Object.values(ch).reduce((s, c) => s + Number(c.reach || 0), 0);
  const totalEngChannel = Object.values(ch).reduce((s, c) => s + Number(c.engagement || 0), 0);

  const displayViews = isAll && totalViewsChannel ? totalViewsChannel : posts.reduce((s, p) => s + Number(p.views || 0), 0);
  const displayReach = isAll && totalReachChannel ? totalReachChannel : posts.reduce((s, p) => s + Number(p.reach || 0), 0);
  const displayEng = isAll && totalEngChannel ? totalEngChannel : posts.reduce((s, p) => s + calcEngagement(p), 0);

  const erKpi = calcErAggregate(posts, isAll, true);
  const erPlain = calcErAggregate(posts, isAll, false);
  const feed = countFeedPosts(posts, isAll);
  const totalClicks = sumChannelClicks(posts, isAll);
  const totalFollowers = Object.values(state.followers).reduce((s, f) => s + Number(f.current || 0), 0);
  const totalGrowth = Object.values(state.followers).reduce((s, f) => s + Number(f.growth || 0), 0);

  document.getElementById('report-kpi-grid').innerHTML = `
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <div class="text-[10px] text-slate-500 font-semibold">Total Published</div>
      <div class="text-xl font-bold text-slate-900 mt-1">${isAll ? formatNum(feed.total) + (feed.partial ? '+' : '') + ' Konten Feed' : formatNum(posts.length) + ' Post'}</div>
      <div class="text-[10px] text-slate-500 mt-0.5">${isAll ? 'Semua platform · tanpa cerita' : 'Di periode aktif'}</div>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <div class="text-[10px] text-slate-500 font-semibold">Total Tayangan / Views</div>
      <div class="text-xl font-bold text-shacman-blue mt-1">${formatNum(displayViews)}</div>
      <div class="text-[10px] text-slate-500 mt-0.5">Gabungan; metrik tiap platform beda (impressions/viewers/tayangan)</div>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <div class="text-[10px] text-slate-500 font-semibold">Total Reach Gabungan</div>
      <div class="text-xl font-bold text-slate-900 mt-1">${formatNum(displayReach)}</div>
      <div class="text-[10px] text-slate-500 mt-0.5">Tidak unik; TikTok = viewers, YouTube = audiens bulanan</div>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <div class="text-[10px] text-slate-500 font-semibold">Total Interaksi / Reaksi</div>
      <div class="text-xl font-bold text-amber-600 mt-1">${formatNum(displayEng)}</div>
      <div class="text-[10px] text-slate-500 mt-0.5">+${formatNum(totalClicks)} klik (LinkedIn; klik carousel termasuk geser halaman)</div>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <div class="text-[10px] text-slate-500 font-semibold">Engagement Rate (definisi KPI)</div>
      <div class="text-xl font-bold text-amber-600 mt-1">${fmtPct(erKpi)}</div>
      <div class="text-[10px] text-slate-500 mt-0.5">Tanpa klik: ${fmtPct(erPlain)} · LinkedIn resmi 1,78%</div>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
      <div class="text-[10px] text-slate-500 font-semibold">Total Komunitas (Snapshot)</div>
      <div class="text-xl font-bold text-emerald-600 mt-1">${formatNum(totalFollowers)} <span class="text-xs font-normal text-slate-500">(+${formatNum(totalGrowth)})</span></div>
      <div class="text-[10px] text-emerald-700 mt-0.5">+${MONTHLY_TRENDS.combinedGrowth.changePct}% pertumbuhan (LinkedIn+TikTok, Sep→Okt)</div>
    </div>
  `;

  // Platform Breakdown Table (8 columns match HTML thead)
  const tbody = document.getElementById('report-platform-tbody');
  tbody.innerHTML = PLATFORMS.map(plat => {
    const pPosts = posts.filter(p => p.platform === plat.id);
    const cStat = getChannel(plat.id);
    const pViews = isAll && cStat.views !== undefined && cStat.views !== null ? cStat.views : pPosts.reduce((s, p) => s + Number(p.views || 0), 0);
    const pReach = isAll && cStat.reach !== undefined ? (cStat.reach || 'n/a') : pPosts.reduce((s, p) => s + Number(p.reach || 0), 0);
    const pEng = isAll && cStat.engagement !== undefined ? (cStat.engagement || 'n/a') : pPosts.reduce((s, p) => s + calcEngagement(p), 0);
    const fObj = state.followers[plat.id] || { current: 0, growth: 0 };
    const viewsLabel = cStat.viewsLabel ? ` (${cStat.viewsLabel})` : '';
    const noteText = cStat.note || (pPosts.length ? `${pPosts.length} post terdata` : '-');

    const publishedCount = isAll && cStat.posts !== undefined && cStat.posts !== null
      ? `${cStat.posts}${cStat.stories ? ' (+ ' + cStat.stories + ' cerita)' : ''}`
      : `${pPosts.length}`;

    const growthText = fObj.growth ? `+${formatNum(fObj.growth)}` : (plat.id === 'Instagram' ? '<span class="text-slate-500">n/a</span>' : '0');

    return `
      <tr>
        <td class="py-2.5 px-4 font-bold text-slate-900">${plat.label}</td>
        <td class="py-2.5 px-4 text-right text-slate-700">${formatNum(fObj.current)}</td>
        <td class="py-2.5 px-4 text-right text-emerald-600 font-semibold">${growthText}</td>
        <td class="py-2.5 px-4 text-right text-slate-700">${publishedCount}</td>
        <td class="py-2.5 px-4 text-right font-bold text-slate-900">${typeof pViews === 'number' ? formatNum(pViews) : pViews}${viewsLabel}</td>
        <td class="py-2.5 px-4 text-right text-slate-700">${typeof pReach === 'number' ? formatNum(pReach) : pReach}</td>
        <td class="py-2.5 px-4 text-right text-amber-600 font-bold">${typeof pEng === 'number' ? formatNum(pEng) : pEng}</td>
        <td class="py-2.5 px-4 text-right text-xs text-slate-600 font-medium">${noteText}</td>
      </tr>
    `;
  }).join('');

  // Top 5 Posts
  const top5 = [...posts].sort((a, b) => Number(b.views || 0) - Number(a.views || 0)).slice(0, 5);
  document.getElementById('report-top-posts').innerHTML = top5.map((p, idx) => {
    const erVal = calcER(p);
    return `
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-[10px] mb-1.5">
            <span class="px-2 py-0.5 rounded bg-shacman-amber text-shacman-navy font-bold">#${idx + 1} Top Post</span>
            <span class="text-slate-600">${p.platform}</span>
          </div>
          <div class="text-xs font-bold text-slate-900 line-clamp-2 mb-2">${p.title}</div>
        </div>
        <div class="pt-2 border-t border-slate-200 text-[11px] space-y-0.5">
          <div class="flex justify-between"><span class="text-slate-500">Pillar:</span><strong class="text-shacman-blue">${(PILLAR_INFO[p.pillar] || {}).short || p.pillar}</strong></div>
          <div class="flex justify-between"><span class="text-slate-500">Views:</span><strong class="text-slate-900">${formatNum(p.views)}</strong></div>
          <div class="flex justify-between"><span class="text-slate-500">Engagement:</span><strong class="text-amber-600">${formatNum(calcEngagement(p))}</strong></div>
          <div class="flex justify-between"><span class="text-slate-500">ER:</span><strong class="text-emerald-600">${erVal !== null ? erVal.toFixed(2) + '%' : 'n/a'}</strong></div>
        </div>
      </div>
    `;
  }).join('') || `<div class="col-span-full text-xs text-slate-400">Belum ada data post di periode ini.</div>`;

  // Render Real Sections: Demographics & Extra Metrics
  renderRealReportSections();

  // Notes
  document.getElementById('reportHighlightInput').value = state.reportNotes?.highlight || '';
  document.getElementById('reportStrategyInput').value = state.reportNotes?.strategy || '';

  // Charts inside Report
  renderReportCharts(posts);
}

function renderReportCharts(posts) {
  const knownPillars = PILLARS.concat([...new Set(posts.map(p => p.pillar).filter(x => x && !PILLARS.includes(x)))]);
  const activePillars = knownPillars.filter(pil => posts.some(p => p.pillar === pil));
  const pillars = activePillars.length ? activePillars : PILLARS;
  const pillarViews = pillars.map(pil => posts.filter(p => p.pillar === pil).reduce((s, p) => s + Number(p.views || 0), 0));

  const ctxPillar = document.getElementById('reportPillarChart');
  if (ctxPillar) {
    if (reportPillarChartInstance) reportPillarChartInstance.destroy();
    reportPillarChartInstance = new Chart(ctxPillar, {
      type: 'doughnut',
      data: {
        labels: pillars,
        datasets: [{
          data: pillarViews,
          backgroundColor: ['#0061ab', '#f2b705', '#38bdf8', '#10b981', '#8b5cf6', '#f97316', '#ec4899', '#06b6d4', '#a3e635', '#f43f5e'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: '#334155', font: { size: 10 } } }
        }
      }
    });
  }

  const avgLabels = pillars.map(pil => (PILLAR_INFO[pil] || {}).short || pil);
  const pillarCounts = pillars.map(pil => posts.filter(p => p.pillar === pil).length);
  const pillarAvg = pillars.map((pil, i) => pillarCounts[i] ? Math.round(posts.filter(p => p.pillar === pil).reduce((s, p) => s + Number(p.views || 0), 0) / pillarCounts[i]) : 0);

  const ctxAvg = document.getElementById('reportPillarAvgChart');
  if (ctxAvg) {
    if (reportPillarAvgChartInstance) reportPillarAvgChartInstance.destroy();
    reportPillarAvgChartInstance = new Chart(ctxAvg, {
      type: 'bar',
      data: {
        labels: avgLabels,
        datasets: [{ label: 'Rata-rata views per post', data: pillarAvg, backgroundColor: '#f2b705', borderRadius: 6 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { afterLabel: ctx => `${pillarCounts[ctx.dataIndex]} post` } }
        },
        scales: {
          x: { ticks: { color: '#64748b', font: { size: 10 } } },
          y: { ticks: { color: '#64748b', font: { size: 10 } } }
        }
      }
    });
  }
}

function saveReportNotes() {
  state.reportNotes = {
    highlight: document.getElementById('reportHighlightInput').value,
    strategy: document.getElementById('reportStrategyInput').value
  };
  saveState();
}

// =========================================================
// TAB 6: 2026 CATALOGUE & BRAND KIT RENDERER
// =========================================================
// =========================================================
// BRAND KIT INDONESIA (sumber utama: profil perusahaan & materi Shacman Indonesia)
// =========================================================
const BRAND_ID = {
  profileText: 'Sejak masuk ke Indonesia pada 2009, SHACMAN terus meningkatkan kecocokan produk, kemampuan layanan, dan dukungan suku cadang untuk berbagai kondisi operasi di Indonesia, dari tambang nikel dan batubara hingga logistik on-road.',
  profile: [
    { value: '2009', label: 'Mulai hadir di Indonesia', copy: 'SHACMAN hadir di Indonesia sejak 2009.' },
    { value: '1968', label: 'Group berdiri di Xi’an, China', copy: 'Shaanxi Automobile Holding Group (SHACMAN) berdiri sejak 1968 dan berkantor pusat di Xi’an, China.' },
    { value: '100+', label: 'Negara & wilayah tujuan ekspor', copy: 'Produk SHACMAN diekspor ke lebih dari 100 negara dan wilayah.' },
    { value: '600+', label: 'Stasiun servis di luar negeri', copy: 'SHACMAN didukung lebih dari 600 stasiun servis di luar negeri.' },
    { value: '25.000+', label: 'Karyawan di seluruh dunia', copy: 'SHACMAN didukung lebih dari 25.000 karyawan di seluruh dunia.' },
    { value: '95%+', label: 'Ketersediaan suku cadang', copy: 'Ketersediaan suku cadang SHACMAN di Indonesia mencapai 95%+, jadi lebih sedikit menunggu dan lebih banyak mengangkut.' }
  ],
  solutions: [
    { title: 'Mining Off-Road', icon: 'mountain', items: [
      'F/X3000 6x4 dump: kelas payload 40 ton, wheelbase pendek dan lincah di tambang pegunungan; membawa 8–10 ton lebih banyak dibanding truk 6x4 Jepang sekelas.',
      'F/X3000 8x4 super heavy-duty dump: bak 8.800 × 2.500 × 2.300 mm (51 m³), payload di atas 50 ton, sekitar 15% di atas rata-rata industri. Dikembangkan dari riset lapangan.',
      'F/X3000 6x4 mining tractor: GCW 240 ton, dengan opsi double trailer bersama mitra karoseri untuk jalan hauling yang baik.'
    ] },
    { title: 'On-Road', icon: 'route', items: [
      'X3000 / X5000 versi Enhanced dan Ultra-Strong: tractor, dump, dan cargo.',
      'L3000 / H3000S versi Standard Load dan Composite: tractor, cargo, dump, mixer, ditambah konfigurasi khusus kebutuhan pelanggan Indonesia.'
    ], note: 'Versi Standard Load dan Composite masih rencana peluncuran. Cek statusnya sebelum dipromosikan.' },
    { title: 'New Energy', icon: 'battery-charging', items: [
      'X5000E: platform truk listrik untuk tambang, tersedia sebagai dump 8x4 (GVW/GCW 120/240 ton) dan tractor 6x4 single atau double trailer.',
      'Baterai 400/600 kWh, bisa diisi ulang maupun battery swap; dirancang untuk angkutan berat di jalan tanah.',
      'Opsi charging: pile 320/360 kW air-cooled dan stack 600 kW liquid-cooled (standar GB/T atau CCS2).'
    ] }
  ],
  cases: [
    { name: 'QS Project', anon: 'Proyek tambang nikel', sector: 'Tambang nikel',
      challenge: 'Beberapa merek truk berat yang diuji tidak memenuhi kebutuhan tambang: ketersediaan unit rendah, biaya operasi tinggi, payload terbatas, dan layanan purna jual lemah.',
      solution: 'Sejak 2015 SHACMAN memasok truk untuk kondisi tambang berat, dengan tingkat kerusakan rendah dan dukungan suku cadang lengkap.',
      result: '8.000+ truk SHACMAN beroperasi (per Juli 2026) dan menjadi armada inti proyek.' },
    { name: 'KBU Project', anon: 'Tambang batubara di Sumatra', sector: 'Batubara · Sumatra',
      challenge: 'Armada sebelumnya punya payload per unit rendah, konsumsi BBM per ton-km tinggi, dan harga beli tinggi.',
      solution: 'Setelah memakai SHACMAN, kapasitas muat dan profit operasional naik. Armada utama dipindah ke F3000 6x4, F3000 8x4, X3000 6x4, dan tractor double trailer X3000.',
      result: '200+ truk SHACMAN dibeli KBU.' },
    { name: 'BDA Project', anon: 'Tambang batubara di Kalimantan Tengah', sector: 'Batubara · Muara Teweh, Kalteng',
      challenge: 'Truk yang dipakai sebelumnya kurang cocok dari sisi kapasitas dan harga, sementara jalan tambang berat dan operasi berjalan 24 jam.',
      solution: 'Sejak 2023 bekerja bersama tim operasi dan pengadaan tambang, mengembangkan F3000 8x4 khusus dengan bak 51 m³. Sepuluh unit pertama beroperasi pada 2024 dengan layanan di lokasi.',
      result: '200+ truk SHACMAN beroperasi di BDA.',
      flag: 'Pernyataan operator bahwa SHACMAN akan menjadi satu-satunya merek truk berat yang disetujui mulai Q4 2026 butuh konfirmasi tertulis sebelum dipublikasikan.' },
    { name: 'SIBA SURYA', anon: 'Perusahaan logistik on-road', sector: 'On-road',
      challenge: 'Armada sebelumnya terdiri dari beberapa merek truk Jepang, Eropa, dan China.',
      solution: 'Peremajaan armada ke SHACMAN X5000 karena tenaga, keandalan, kenyamanan, dan efisiensi operasionalnya.',
      result: 'X5000 kini pilihan utama armada SIBA SURYA, mendukung efisiensi angkut lebih tinggi dan biaya operasi lebih rendah.' }
  ],
  support: [
    { title: 'Suku Cadang', icon: 'package', items: [
      'Ketersediaan suku cadang 95%+.',
      'Hub suku cadang di kota-kota utama Indonesia, stok direncanakan berbasis data agar dekat dengan lokasi kerja.',
      '85%+ komponen dipakai bersama dalam satu platform, sehingga stok lebih ringan dan modal lebih hemat.'
    ] },
    { title: 'Pelatihan', icon: 'graduation-cap', items: [
      'Teknisi lokal: pelatihan keterampilan langsung di berbagai wilayah Indonesia.',
      'Tim dealer: pelatihan produk dan layanan secara berkala.',
      'Sopir dan tim perawatan pelanggan: program khusus sesuai proyek, termasuk walkaround training.'
    ] },
    { title: 'R&D untuk Indonesia', icon: 'microscope', items: [
      '1–2 engineer R&D ditempatkan di Indonesia untuk mendukung tim sales dan after-sales.',
      'Riset rutin: analisis rute, survei kondisi jalan dan kendaraan, pengukuran road spectrum, dan kunjungan pelanggan.',
      'Pengembangan khusus tambang Indonesia: analisis ergonomi, penguatan kabin, optimasi suspensi, serta peningkatan kedap air dan anti-karat.'
    ] }
  ],
  regions: ['Sulawesi', 'Maluku', 'Kalimantan', 'Sumatra', 'Jawa'],
  regionNote: 'Armada terbanyak berada di Sulawesi dan Maluku, sementara Sumatra dan Kalimantan terus berkembang.',
  voice: [
    { platform: 'LinkedIn', text: 'Bahasa Inggris, korporat, B2B. Pembaca: pemilik armada, manajer operasi tambang dan logistik.' },
    { platform: 'Instagram · TikTok · Facebook', text: 'Bahasa Indonesia santai untuk komunitas Shacmate: sopir, mekanik, dan penggemar truk.' },
    { platform: 'YouTube', text: 'Shorts untuk jangkauan; video panjang untuk walkaround dan edukasi produk.' }
  ],
  rules: [
    'Data penjualan (unit terjual, pertumbuhan, pangsa pasar) bukan key point konten.',
    'Bagian internal profil perusahaan (rencana operasi, termin kredit, gudang) tidak dipakai untuk konten.',
    'Nama klien (QS, KBU, BDA, SIBA SURYA) hanya dipakai setelah ada izin. Sebelum itu, pakai versi anonim.',
    'Jangan menyebut atau membandingkan langsung dengan merek pesaing tanpa persetujuan atasan.',
    'Klaim dari pihak ketiga, seperti status merek di BDA, butuh konfirmasi tertulis.',
    'Angka global (160+ negara, studi kasus luar negeri) hanya pendukung. Utamakan bukti Indonesia.'
  ]
};

function renderBrandKitID() {
  const el = id => document.getElementById(id);
  const esc = t => String(t).replace(/'/g, '\\\'').replace(/"/g, '&quot;');
  if (el('bk-profile-text')) el('bk-profile-text').innerText = BRAND_ID.profileText;
  if (el('bk-profile')) el('bk-profile').innerHTML = BRAND_ID.profile.map(s => `
    <button onclick="copyText('${esc(s.copy)}')" title="Klik untuk salin kalimat" class="text-left p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-shacman-blue transition">
      <div class="text-lg font-bold text-amber-600">${s.value}</div>
      <div class="text-[11px] text-slate-600 leading-snug">${s.label}</div>
    </button>`).join('');
  if (el('bk-solutions')) el('bk-solutions').innerHTML = BRAND_ID.solutions.map(s => `
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
      <div class="flex items-center gap-2 text-sm font-bold text-slate-900"><i data-lucide="${s.icon}" class="w-4 h-4 text-amber-600"></i>${s.title}</div>
      <ul class="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-4">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
      ${s.note ? `<div class="text-[11px] text-amber-700 border-t border-slate-200 pt-2">${s.note}</div>` : ''}
    </div>`).join('');
  if (el('bk-cases')) el('bk-cases').innerHTML = BRAND_ID.cases.map(c => `
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
      <div class="flex items-start justify-between gap-2">
        <div><div class="text-sm font-bold text-slate-900">${c.name}</div><div class="text-[11px] text-slate-500">${c.sector}</div></div>
        <span class="text-[10px] px-2 py-0.5 rounded border border-amber-300 text-amber-700 shrink-0">butuh izin nama</span>
      </div>
      <div class="text-xs text-slate-700 leading-relaxed space-y-1">
        <p><strong class="text-slate-900">Tantangan:</strong> ${c.challenge}</p>
        <p><strong class="text-slate-900">Solusi:</strong> ${c.solution}</p>
        <p><strong class="text-slate-900">Hasil:</strong> ${c.result}</p>
      </div>
      ${c.flag ? `<div class="text-[11px] text-amber-700">${c.flag}</div>` : ''}
      <div class="text-[11px] text-slate-500 border-t border-slate-200 pt-2">Versi anonim: <button onclick="copyText('${esc(c.anon)}')" class="underline hover:text-shacman-blue">${c.anon}</button></div>
    </div>`).join('');
  if (el('bk-support')) el('bk-support').innerHTML = BRAND_ID.support.map(s => `
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
      <div class="flex items-center gap-2 text-sm font-bold text-slate-900"><i data-lucide="${s.icon}" class="w-4 h-4 text-amber-600"></i>${s.title}</div>
      <ul class="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-4">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
  if (el('bk-regions')) el('bk-regions').innerHTML = BRAND_ID.regions.map(r => `<span class="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900">${r}</span>`).join('') +
    `<p class="w-full text-[11px] text-slate-500 mt-1">${BRAND_ID.regionNote}</p>`;
  if (el('bk-pillars')) el('bk-pillars').innerHTML = PILLARS.map((p, i) => `
    <div class="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="text-sm font-bold text-amber-600 w-5 shrink-0">${i + 1}</div>
      <div><div class="text-xs font-bold text-slate-900">${p}</div><div class="text-[11px] text-slate-600">${PILLAR_INFO[p].desc}</div></div>
    </div>`).join('');
  if (el('bk-voice')) el('bk-voice').innerHTML = BRAND_ID.voice.map(v => `
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200"><div class="text-xs font-bold text-slate-900">${v.platform}</div><div class="text-[11px] text-slate-600 mt-0.5">${v.text}</div></div>`).join('');
  if (el('bk-rules')) el('bk-rules').innerHTML = BRAND_ID.rules.map(r => `<li>${r}</li>`).join('');
}

function renderBrandKit() {
  renderBrandKitID();
  // 1. Corporate Stats At a Glance 2026
  const statsEl = document.getElementById('corporate-stats-grid');
  if (statsEl) {
    statsEl.innerHTML = CORPORATE_STATS_2026.filter(st => !/penjualan|sales|terjual/i.test(st.label)).map(st => `
      <div onclick="copyText('${st.copy}')" class="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-shacman-blue cursor-pointer transition group">
        <div class="text-sm font-bold text-amber-600 group-hover:scale-105 transition-transform">${st.value}</div>
        <div class="text-[10px] text-slate-600 mt-0.5 leading-tight">${st.label}</div>
      </div>
    `).join('');
  }

  // 2. Full Specification Matrix Table (2026 Universal Foldout)
  const specTbody = document.getElementById('spec-matrix-tbody');
  if (specTbody) {
    specTbody.innerHTML = SPEC_MATRIX_2026.map(sp => `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-3.5">
          <div class="font-bold text-slate-900">${sp.model}</div>
          <div class="text-[10px] text-amber-600 font-semibold">${sp.series}</div>
        </td>
        <td class="py-2.5 px-3.5 font-semibold text-slate-600 whitespace-nowrap">${sp.drive}</td>
        <td class="py-2.5 px-3.5 text-slate-700 whitespace-nowrap">${sp.weight}</td>
        <td class="py-2.5 px-3.5 text-slate-700">${sp.engine}</td>
        <td class="py-2.5 px-3.5 font-semibold text-amber-600 whitespace-nowrap">${sp.power}</td>
        <td class="py-2.5 px-3.5 text-slate-700">${sp.transmission}</td>
        <td class="py-2.5 px-3.5 text-slate-700">${sp.axle}</td>
        <td class="py-2.5 px-3.5 text-slate-600">${sp.app}</td>
      </tr>
    `).join('');
  }

  // 3. 5 Core Series Positioning Cards
  document.getElementById('brand-unit-cards').innerHTML = SHACMAN_UNITS_INFO.map(u => `
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-sm font-bold text-slate-900">${u.series}</span>
        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-slate-600 border border-shacman-blue font-semibold shrink-0">${u.engine}</span>
      </div>
      <div class="text-xs font-bold text-amber-600">${u.tagline}</div>
      <p class="text-xs text-slate-700 leading-relaxed">${u.usp}</p>
      <div class="text-[11px] text-slate-600 pt-1 border-t border-slate-200">
        <strong>Target Segmen:</strong> ${u.target}
      </div>
    </div>
  `).join('');

  // 4. Global Proven Case Studies (2026 Inside SHACMAN)
  const casesEl = document.getElementById('global-cases-grid');
  if (casesEl) {
    casesEl.innerHTML = GLOBAL_CASE_STUDIES_2026.map(c => `
      <div onclick="copyText('${c.region} (${c.model}): ${c.result}')" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-shacman-blue cursor-pointer transition space-y-1">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-amber-600">${c.region}</span>
          <span class="text-[10px] text-shacman-blue">Klik Salin</span>
        </div>
        <div class="text-xs font-bold text-slate-900">${c.model}</div>
        <p class="text-[11px] text-slate-700 leading-relaxed">${c.result}</p>
      </div>
    `).join('');
  }

  // 5. 16 Official PDF Files from G:\My Drive\SHACMAN ID\shacman 2026 catalogue
  const pdfListEl = document.getElementById('catalogue-pdf-list');
  if (pdfListEl) {
    pdfListEl.innerHTML = CATALOGUE_PDF_FILES_2026.map(pdf => {
      const encodedUrl = `file:///G:/My%20Drive/SHACMAN%20ID/shacman%202026%20catalogue/${encodeURIComponent(pdf.file)}`;
      return `
        <a href="${encodedUrl}" target="_blank" class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 transition group text-xs">
          <div class="flex items-center gap-2 min-w-0">
            <i data-lucide="file-text" class="w-4 h-4 text-amber-600 shrink-0"></i>
            <span class="text-slate-800 group-hover:text-shacman-blue truncate font-medium">${pdf.name}</span>
          </div>
          <span class="text-[10px] text-slate-500 shrink-0 ml-2">${pdf.size}</span>
        </a>
      `;
    }).join('');
  }

  // 6. Hashtags
  document.getElementById('hashtag-packs').innerHTML = HASHTAG_PACKS.map(hp => `
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-slate-900">${hp.title}</span>
        <button onclick="copyText('${hp.tags}')" class="text-[11px] text-amber-600 hover:underline flex items-center gap-1 font-semibold">
          <i data-lucide="copy" class="w-3 h-3"></i> Salin
        </button>
      </div>
      <p class="text-[11px] text-slate-600 leading-relaxed">${hp.tags}</p>
    </div>
  `).join('');
}

// =========================================================
// MODALS & CRUD HANDLERS
// =========================================================
function populatePlatformCheckboxes(selected = []) {
  const container = document.getElementById('planPlatformsCheckboxes');
  container.innerHTML = PLATFORMS.map(p => {
    const checked = selected.includes(p.id) ? 'checked' : '';
    return `
      <label class="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer text-xs text-slate-700">
        <input type="checkbox" name="planPlatformItem" value="${p.id}" ${checked} onchange="refreshPlanCaptions()" class="accent-[#0061ab] rounded">
        <span>${p.label}</span>
      </label>
    `;
  }).join('');
}

function openPlanModal(planId = null, defaultDate = null) {
  const modal = document.getElementById('planModal');
  document.getElementById('planForm').reset();

  if (planId) {
    const plan = state.plans.find(p => p.id === planId);
    if (!plan) return;
    document.getElementById('planModalTitle').innerText = 'Edit Jadwal Content Plan';
    document.getElementById('planId').value = plan.id;
    document.getElementById('planDate').value = plan.date;
    document.getElementById('planStatus').value = plan.status;
    document.getElementById('planTitle').value = plan.title;
    document.getElementById('planPillar').value = plan.pillar;
    document.getElementById('planFormat').value = plan.format;
    document.getElementById('planPic').value = plan.pic || '';
    document.getElementById('planBrief').value = plan.brief || '';
    planDraftCaptions = { ...(plan.captions || {}) };
    planDraftAssets = (plan.assets || []).map(a => ({ ...a }));
    planDraftFbSeparate = !!plan.fbSeparate;
    planDraftThreads = plan.threads ? JSON.parse(JSON.stringify(plan.threads)) : { topic: '', posts: [newThreadPost()] };
    if (!planDraftThreads.posts || !planDraftThreads.posts.length) planDraftThreads.posts = [newThreadPost()];
    populatePlatformCheckboxes(plan.platforms || []);
  } else {
    document.getElementById('planModalTitle').innerText = 'Tambah Jadwal Content Plan';
    document.getElementById('planId').value = '';
    document.getElementById('planDate').value = defaultDate || new Date().toISOString().slice(0, 10);
    planDraftCaptions = {};
    planDraftAssets = [];
    planDraftFbSeparate = false;
    planDraftThreads = { topic: '', posts: [newThreadPost()] };
    populatePlatformCheckboxes(['Instagram', 'TikTok']);
  }
  document.getElementById('planFromIdea').value = '';
  renderPlanCaptionFields();
  renderPlanAssets();

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePlanModal() {
  const modal = document.getElementById('planModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function savePlanForm(e) {
  e.preventDefault();
  const id = document.getElementById('planId').value;
  const checkedPlatforms = Array.from(document.querySelectorAll('input[name="planPlatformItem"]:checked')).map(el => el.value);

  const payload = {
    id: id || ('plan-' + Date.now()),
    date: document.getElementById('planDate').value,
    status: document.getElementById('planStatus').value,
    title: document.getElementById('planTitle').value,
    pillar: document.getElementById('planPillar').value,
    platforms: checkedPlatforms.length ? checkedPlatforms : ['Instagram'],
    format: document.getElementById('planFormat').value,
    pic: document.getElementById('planPic').value,
    brief: document.getElementById('planBrief').value,
    captions: Object.fromEntries(Object.entries((syncPlanCaptionDraft(), planDraftCaptions)).filter(([k, v]) => String(v || '').trim())),
    fbSeparate: planDraftFbSeparate,
    assets: planDraftAssets.filter(a => String(a.url || '').trim() || String(a.label || '').trim()),
    threads: (checkedPlatforms.includes('Threads') || planDraftThreads.posts.some(p => String(p.text || '').trim())) ? JSON.parse(JSON.stringify(planDraftThreads)) : undefined
  };
  const fromIdea = document.getElementById('planFromIdea').value;
  if (fromIdea) {
    const idea = state.ideas.find(i => i.id === fromIdea);
    if (idea) idea.scheduledPlanId = payload.id;
  }

  if (id) {
    const idx = state.plans.findIndex(p => p.id === id);
    if (idx > -1) state.plans[idx] = { ...state.plans[idx], ...payload };
  } else {
    state.plans.push(payload);
  }

  saveState();
  closePlanModal();
  renderAll();
  showToast('Jadwal Content Plan berhasil disimpan!');
}

function deletePlan(id) {
  if (!confirm('Hapus jadwal konten ini?')) return;
  state.plans = state.plans.filter(p => p.id !== id);
  state.ideas.forEach(i => { if (i.scheduledPlanId === id) delete i.scheduledPlanId; });
  saveState();
  renderAll();
  showToast('Jadwal dihapus.');
}

// Isi form post dari rencana untuk platform tertentu (bisa diganti lewat pilihan platform di form)
let pendingPlanForPost = null;
function prefillPostFromPlan(plan, platform) {
  document.getElementById('postPlatform').value = platform;
  const cap = captionForPlatform(plan, platform);
  const assetsTxt = (plan.assets || []).filter(a => a.url).map(a => `${a.label || 'Aset'}: ${a.url}`).join(' | ');
  const isThreads = platform === 'Threads' && plan.threads;
  document.getElementById('postGrp').value = plan.id;
  document.getElementById('postTopic').value = isThreads ? (plan.threads.topic || '') : '';
  if (isThreads) {
    const t = THREAD_ATTACH_TYPES.find(x => x.id === (plan.threads.posts[0] || {}).attachType) || THREAD_ATTACH_TYPES[0];
    document.getElementById('postFormat').value = t.format;
  } else if (plan.format && [...document.getElementById('postFormat').options].some(o => o.value === plan.format)) {
    document.getElementById('postFormat').value = plan.format;
  }
  document.getElementById('postNotes').value = [isThreads ? threadsSummary(plan.threads) : '', cap ? (isThreads ? 'Teks: ' : 'Caption: ') + cap.replace(/\s*\n\s*/g, ' ') : '', assetsTxt ? 'Aset: ' + assetsTxt : ''].filter(Boolean).join(' · ');
}
function onPostPlatformChange() {
  if (!pendingPlanForPost) return;
  const plan = state.plans.find(p => p.id === pendingPlanForPost);
  if (plan) { prefillPostFromPlan(plan, document.getElementById('postPlatform').value); renderPostFromPlanStatus(plan); }
}

// ---- Status pencatatan rencana ke Post Data ----
function recordedPlatformsOf(planId) {
  return new Set(state.posts.filter(p => p.grp === planId).map(p => p.platform));
}
function pendingPlatformsOf(plan) {
  const done = recordedPlatformsOf(plan.id);
  return (plan.platforms || []).filter(pl => !done.has(pl));
}
function planRecordBadge(plan) {
  const total = (plan.platforms || []).length;
  if (!total) return '';
  const done = total - pendingPlatformsOf(plan).length;
  const full = done === total;
  return `<span class="inline-block text-[10px] px-2 py-0.5 rounded border ${full ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-600 border-slate-200'}">Tercatat ${done}/${total} platform</span>`;
}
function renderPostFromPlanStatus(plan) {
  const box = document.getElementById('postFromPlanStatus');
  if (!box) return;
  if (!plan) { box.innerHTML = 'Pilih rencana untuk mengisi form otomatis, atau biarkan kosong untuk input manual.'; return; }
  const done = recordedPlatformsOf(plan.id);
  box.innerHTML = (plan.platforms || []).map(pl => `<span class="${done.has(pl) ? 'text-emerald-700' : 'text-slate-600'}">${getPlatformMeta(pl).label} ${done.has(pl) ? '✓' : 'belum'}</span>`).join(' · ');
}
function populatePostFromPlan(includeId = null) {
  const sel = document.getElementById('postFromPlan');
  if (!sel) return;
  const list = state.plans
    .filter(p => (p.status === 'Published' && pendingPlatformsOf(p).length) || p.id === includeId)
    .sort((a, b) => b.date.localeCompare(a.date));
  sel.innerHTML = '<option value="">— Input manual (tanpa rencana) —</option>' + list.map(p =>
    `<option value="${p.id}">${p.date} · ${String(p.title).slice(0, 60)} · ${(p.platforms || []).map(pl => getPlatformMeta(pl).label).join(', ')}</option>`).join('');
  sel.value = includeId || '';
}
function onPostFromPlanChange() {
  const id = document.getElementById('postFromPlan').value;
  if (!id) { openPostModal(); return; }
  const plan = state.plans.find(p => p.id === id);
  if (!plan) return;
  document.getElementById('postDate').value = plan.date;
  document.getElementById('postTitle').value = plan.title;
  document.getElementById('postPillar').value = plan.pillar;
  pendingPlanForPost = plan.id;
  prefillPostFromPlan(plan, pendingPlatformsOf(plan)[0] || (plan.platforms || [])[0] || 'Instagram');
  renderPostFromPlanStatus(plan);
}

function convertPlanToPost(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan) return;
  plan.status = 'Published';
  saveState();

  openPostModal();
  populatePostFromPlan(plan.id);
  document.getElementById('postDate').value = plan.date;
  document.getElementById('postTitle').value = plan.title;
  document.getElementById('postPillar').value = plan.pillar;
  pendingPlanForPost = plan.id;
  prefillPostFromPlan(plan, pendingPlatformsOf(plan)[0] || (plan.platforms || [])[0] || 'Instagram');
  renderPostFromPlanStatus(plan);
  renderAll();
}

function openIdeaModal(ideaId = null) {
  const modal = document.getElementById('ideaModal');
  document.getElementById('ideaForm').reset();

  if (ideaId) {
    const idea = state.ideas.find(i => i.id === ideaId);
    if (!idea) return;
    document.getElementById('ideaId').value = idea.id;
    document.getElementById('ideaTitle').value = idea.title;
    document.getElementById('ideaHook').value = idea.hook;
    document.getElementById('ideaPillar').value = idea.pillar;
    document.getElementById('ideaPriority').value = idea.priority;
    document.getElementById('ideaNotes').value = idea.notes || '';
    document.getElementById('ideaDate').value = idea.date || '';
  } else {
    document.getElementById('ideaId').value = '';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeIdeaModal() {
  const modal = document.getElementById('ideaModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveIdeaForm(e) {
  e.preventDefault();
  const id = document.getElementById('ideaId').value;
  const payload = {
    id: id || ('idea-' + Date.now()),
    title: document.getElementById('ideaTitle').value,
    hook: document.getElementById('ideaHook').value,
    pillar: document.getElementById('ideaPillar').value,
    priority: document.getElementById('ideaPriority').value,
    notes: document.getElementById('ideaNotes').value,
    date: document.getElementById('ideaDate').value || ''
  };

  if (id) {
    const idx = state.ideas.findIndex(i => i.id === id);
    if (idx > -1) state.ideas[idx] = { ...state.ideas[idx], ...payload };
  } else {
    state.ideas.unshift(payload);
  }

  saveState();
  closeIdeaModal();
  renderAll();
  showToast('Ide konten berhasil disimpan di Bank Ide!');
}

function deleteIdea(id) {
  if (!confirm('Hapus ide ini dari Bank Ide?')) return;
  state.ideas = state.ideas.filter(i => i.id !== id);
  saveState();
  renderAll();
}

function convertIdeaToPlan(ideaId) {
  const idea = state.ideas.find(i => i.id === ideaId);
  if (!idea) return;
  openPlanModal(null, idea.date || null);
  document.getElementById('planTitle').value = idea.title;
  document.getElementById('planPillar').value = idea.pillar;
  document.getElementById('planBrief').value = `Hook: ${idea.hook}\nPrioritas: ${idea.priority || '-'}\nCatatan: ${idea.notes || '-'}`;
  document.getElementById('planFromIdea').value = idea.id;
}

function openPostModal(postId = null) {
  const modal = document.getElementById('postModal');
  document.getElementById('postForm').reset();
  document.getElementById('postGrp').value = '';
  document.getElementById('postTopic').value = '';
  pendingPlanForPost = null;
  const fromBox = document.getElementById('postFromPlanBox');
  if (fromBox) fromBox.classList.toggle('hidden', !!postId);
  if (!postId) { populatePostFromPlan(); renderPostFromPlanStatus(null); }

  if (postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;
    document.getElementById('postModalTitle').innerText = 'Edit Data Post & Metrik Medsos';
    document.getElementById('postId').value = post.id;
    document.getElementById('postDate').value = post.date;
    document.getElementById('postPlatform').value = post.platform;
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postPillar').value = post.pillar;
    document.getElementById('postFormat').value = post.format || 'video';
    document.getElementById('postBrandOk').value = post.brandOk === true ? 'yes' : (post.brandOk === false ? 'no' : '');
    document.getElementById('postViews').value = post.views || 0;
    document.getElementById('postReach').value = post.reach || 0;
    document.getElementById('postClicks').value = post.clicks || 0;
    document.getElementById('postCtr').value = post.ctr !== undefined ? post.ctr : (post.views ? ((post.clicks / post.views) * 100).toFixed(2) : 0);
    document.getElementById('postLikes').value = post.likes || (post.interactions || 0);
    document.getElementById('postComments').value = post.comments || 0;
    document.getElementById('postShares').value = post.shares || 0;
    document.getElementById('postNewFollowers').value = post.newFollowers || 0;
    document.getElementById('postNotes').value = post.notes || '';
    document.getElementById('postLink').value = post.link || '';
  } else {
    document.getElementById('postModalTitle').innerText = 'Input Data Post & Metrik Medsos';
    document.getElementById('postId').value = '';
    document.getElementById('postDate').value = new Date().toISOString().slice(0, 10);
    document.getElementById('postFormat').value = 'video';
    if (state.selectedPlatformFilter !== 'ALL') {
      document.getElementById('postPlatform').value = state.selectedPlatformFilter;
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePostModal() {
  const modal = document.getElementById('postModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function savePostForm(e) {
  e.preventDefault();
  const id = document.getElementById('postId').value;
  const views = Number(document.getElementById('postViews').value || 0);
  const clicks = Number(document.getElementById('postClicks').value || 0);
  const rawCtr = document.getElementById('postCtr').value;
  const ctr = rawCtr !== '' ? Number(rawCtr) : (views ? ((clicks / views) * 100) : 0);

  const existingPost = id ? state.posts.find(p => p.id === id) : null;

  const payload = {
    id: id || ('post-' + Date.now()),
    date: document.getElementById('postDate').value,
    platform: document.getElementById('postPlatform').value,
    title: document.getElementById('postTitle').value,
    pillar: document.getElementById('postPillar').value,
    format: document.getElementById('postFormat').value,
    brandOk: ({ yes: true, no: false })[document.getElementById('postBrandOk').value],
    views: views,
    reach: Number(document.getElementById('postReach').value || 0),
    clicks: clicks,
    ctr: ctr,
    likes: Number(document.getElementById('postLikes').value || 0),
    comments: Number(document.getElementById('postComments').value || 0),
    shares: Number(document.getElementById('postShares').value || 0),
    newFollowers: Number(document.getElementById('postNewFollowers').value || 0),
    notes: document.getElementById('postNotes').value || '',
    link: document.getElementById('postLink').value,
    interactions: existingPost?.interactions,
    metricsPartial: existingPost?.metricsPartial || false
  };
  const grpVal = document.getElementById('postGrp').value;
  const topicVal = document.getElementById('postTopic').value;
  if (grpVal) payload.grp = grpVal;
  pendingPlanForPost = null;
  if (topicVal) payload.topic = topicVal;

  if (id) {
    const idx = state.posts.findIndex(p => p.id === id);
    if (idx > -1) state.posts[idx] = { ...state.posts[idx], ...payload };
  } else {
    state.posts.unshift(payload);
  }

  saveState();
  closePostModal();
  renderAll();
  showToast('Data metrik post medsos berhasil disimpan!');
}

function deletePost(id) {
  if (!confirm('Hapus data post medsos ini?')) return;
  state.posts = state.posts.filter(p => p.id !== id);
  saveState();
  renderAll();
}

function openFollowerModal() {
  const modal = document.getElementById('followerModal');
  const container = document.getElementById('followerInputsContainer');

  container.innerHTML = PLATFORMS.map(p => {
    const f = state.followers[p.id] || { current: 0, growth: 0 };
    return `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center">
        <div class="font-bold text-slate-900">${p.label}</div>
        <div>
          <label class="block text-[10px] text-slate-500">Total Followers / Subs</label>
          <input type="number" data-plat="${p.id}" data-field="current" value="${f.current}" class="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-900">
        </div>
        <div>
          <label class="block text-[10px] text-slate-500">Growth Bulan Ini (+)</label>
          <input type="number" data-plat="${p.id}" data-field="growth" value="${f.growth}" class="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-amber-600 font-bold">
        </div>
      </div>
    `;
  }).join('');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeFollowerModal() {
  const modal = document.getElementById('followerModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveFollowerForm(e) {
  e.preventDefault();
  document.querySelectorAll('#followerInputsContainer input').forEach(inp => {
    const plat = inp.getAttribute('data-plat');
    const field = inp.getAttribute('data-field');
    if (!state.followers[plat]) state.followers[plat] = { current: 0, growth: 0 };
    state.followers[plat][field] = Number(inp.value || 0);
  });
  saveState();
  closeFollowerModal();
  renderAll();
  showToast('Data followers & growth berhasil diperbarui!');
}

function exportBackupJSON() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shacman-branding-2026-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  localStorage.setItem(BACKUP_KEY, String(Date.now()));
  showToast('File Backup JSON berhasil diunduh!');
}

function importBackupJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!imported || typeof imported !== 'object' || !Array.isArray(imported.posts) || !Array.isArray(imported.plans)) {
        alert('File ini bukan backup Shacman Branding Hub yang valid (data plans/posts tidak ditemukan). Data lama tidak diubah.');
        return;
      }
      if (!confirm('Restore akan MENGGANTI semua data saat ini dengan isi file backup. Lanjutkan?')) return;
      state = sanitizeState(imported);
      saveState();
      renderAll();
      showToast('Database berhasil di-restore dari file JSON!');
    } catch (err) {
      alert('Format file JSON tidak valid.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function exportCSVPosts() {
  const headers = ['Tanggal', 'Platform', 'Judul Konten', 'Content Pillar', 'Format', 'Views', 'Reach', 'Klik', 'CTR (%)', 'Likes', 'Comments', 'Shares', 'Followers Baru', 'Engagement Rate (%)', 'Catatan', 'Link'];
  const rows = state.posts.map(p => [
    p.date,
    p.platform,
    `"${(p.title || '').replace(/"/g, '""')}"`,
    `"${(p.pillar || '').replace(/"/g, '""')}"`,
    p.format || '',
    p.views || 0,
    p.reach || 0,
    p.clicks !== undefined ? p.clicks : 0,
    p.ctr !== undefined ? Number(p.ctr).toFixed(2) : (p.views ? ((p.clicks / p.views) * 100).toFixed(2) : '0.00'),
    p.likes || (p.interactions || 0),
    p.comments || 0,
    p.shares || 0,
    p.newFollowers || 0,
    p.metricsPartial ? 'n/a' : (calcER(p) !== null ? calcER(p).toFixed(2) : 'n/a'),
    `"${(p.notes || '').replace(/"/g, '""')}"`,
    p.link || ''
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shacman-2026-medsos-posts-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data Post Medsos berhasil di-export ke CSV/Excel!');
}

function resetDemoData() {
  if (!confirm('Muat ulang seluruh data real laporan CSV (Agustus–Oktober 2026)?')) return;
  state = getDefaultData();
  saveState();
  renderAll();
  showToast('Data Laporan Real Medsos berhasil dimuat ulang!');
}

function clearAllPostData() {
  if (!confirm('Kosongkan (Nol-kan) daftar Post Data & Followers untuk mulai mengisi data real tim Anda? (Bank Ide & Katalog 2026 tetap tersimpan)')) return;
  state.posts = [];
  Object.keys(state.followers).forEach(k => {
    state.followers[k] = { current: 0, growth: 0 };
  });
  saveState();
  renderAll();
  showToast('Data metrik post & followers telah dikosongkan (siap diisi data real)!');
}

// =========================================================
// TAB 7: KPI OTOMATIS PER BULAN (form penilaian "Social Media & Brand Marketing")
// Mengikuti "Periode Aktif". Capaian = Aktual ÷ Target × 100%. Skor = capaian × bobot.
// =========================================================
const KPI_DEFS = [
  { id: 'growth',  name: 'Social Media Growth', target: '≥5% pertumbuhan follower/bulan', w: 10 },
  { id: 'content', name: 'Content Production & Consistency', target: '≥20 konten/bulan', w: 15 },
  { id: 'er',      name: 'Engagement Rate', target: '≥5% rata-rata ER', w: 15 },
  { id: 'reach',   name: 'Reach & Brand Awareness', target: '≥100.000 total reach/bulan', w: 10 },
  { id: 'leads',   name: 'Lead Generation', target: '≥30 qualified leads/bulan', w: 15 },
  { id: 'viewer',  name: 'Viewer Attraction & Retention Growth', target: '≥10% pertumbuhan view/bulan + ≥30% rata-rata retensi', w: 10 },
  { id: 'brand',   name: 'Brand Consistency', target: '100% sesuai brand guideline', w: 10 },
  { id: 'visual',  name: 'Photo & Video Design / Production', target: '≥12 proyek foto/video/bulan', w: 5 },
  { id: 'report',  name: 'Digital Marketing Reporting & Analytics', target: '1 laporan bulanan lengkap/bulan', w: 5 }
];
// Teamwork & Work Attitude (bobot 5%) tidak dinilai di hub, sehingga skor total maksimal 95%.
const KPI_RATINGS = [[110, 'Outstanding'], [100, 'Exceeds Expectations'], [90, 'Meets Expectations'], [75, 'Needs Improvement'], [0, 'Unsatisfactory']];
const KPI_VISUAL_FORMATS = ['video', 'carousel dokumen', 'tanpa label video (gambar/teks)', 'Long Video'];
const MONTH_NAMES_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
let kpiEditMonth = null;

function kpiRating(score) {
  return (KPI_RATINGS.find(r => score >= r[0]) || KPI_RATINGS[KPI_RATINGS.length - 1])[1];
}
function monthKey(d) { return String(d || '').slice(0, 7); }
function monthLabel(m) { const [y, mo] = String(m).split('-').map(Number); return (MONTH_NAMES_ID[mo - 1] || m) + ' ' + y; }
function prevMonthKey(m) {
  const [y, mo] = m.split('-').map(Number);
  const d = new Date(y, mo - 2, 1);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}
function emptyMonthly() { return { followers: {}, reach: {}, teamwork: null, reportDone: false }; }
function peekMonthly(m) { return (state.monthly && state.monthly[m]) || emptyMonthly(); }
function getMonthly(m) {
  if (!state.monthly) state.monthly = {};
  if (!state.monthly[m]) state.monthly[m] = emptyMonthly();
  const o = state.monthly[m];
  if (!o.followers) o.followers = {};
  if (!o.reach) o.reach = {};
  return o;
}
function numOrNull(v) { return (v === null || v === undefined || v === '' || isNaN(Number(v))) ? null : Number(v); }

// Bulan yang dinilai: dari "bulan awal penilaian" sampai bulan terakhir yang punya data
function kpiMonths() {
  const start = (state.kpiSettings && state.kpiSettings.startMonth) || '2026-09';
  const set = new Set(state.posts.map(p => monthKey(p.date)).filter(m => m && m >= start));
  return [...set].sort();
}
function kpiActiveMonth() {
  if (state.selectedMonth && state.selectedMonth !== 'ALL') return state.selectedMonth;
  const ms = kpiMonths();
  return ms.length ? ms[ms.length - 1] : new Date().toISOString().slice(0, 7);
}

// Retensi otomatis: rata-rata % ditonton dibobot views (YouTube = avg % viewed; Facebook = detik tonton ÷ durasi)
function autoRetention(source, posts) {
  const plats = source === 'facebook' ? ['Facebook Page'] : (source === 'all' ? ['YouTube', 'YT Shorts', 'Facebook Page'] : ['YouTube', 'YT Shorts']);
  const list = posts.filter(p => plats.includes(p.platform) && typeof p.retentionPct === 'number' && Number(p.views) > 0);
  const w = list.reduce((s, p) => s + Number(p.views), 0);
  return w ? list.reduce((s, p) => s + p.retentionPct * Number(p.views), 0) / w : null;
}

// Perkiraan reach dari data post (hanya Instagram & Facebook yang punya reach per post)
function kpiReachEstimate(m, platformId) {
  if (!['Instagram', 'Facebook Page'].includes(platformId)) return null;
  const v = state.posts.filter(p => p.platform === platformId && monthKey(p.date) === m).reduce((s, p) => s + Number(p.reach || 0), 0);
  return v > 0 ? v : null;
}

function computeKpiMonth(m) {
  const st = state.kpiSettings || {};
  const cap = Number(st.cap) > 0 ? Number(st.cap) : Infinity;
  const incClicks = st.erIncludeClicks !== false;
  const posts = state.posts.filter(p => monthKey(p.date) === m);
  const prev = prevMonthKey(m);
  const prevPosts = state.posts.filter(p => monthKey(p.date) === prev);
  const mon = peekMonthly(m), monPrev = peekMonthly(prev);
  const ach = (actual, target) => actual === null ? null : (actual / target) * 100;

  // 1. Pertumbuhan follower (platform yang punya angka akhir bulan ini & bulan lalu)
  let fNow = 0, fPrev = 0, fPlat = 0;
  PLATFORMS.forEach(pl => {
    const a = numOrNull((mon.followers || {})[pl.id]), b = numOrNull((monPrev.followers || {})[pl.id]);
    if (a !== null && b !== null) { fNow += a; fPrev += b; fPlat++; }
  });
  const growth = fPrev > 0 ? ((fNow - fPrev) / fPrev) * 100 : null;

  // 2. Konten
  const unique = new Set(posts.map(p => p.grp || p.id)).size;
  const content = st.contentMode === 'platform' ? posts.length : unique;

  // 3. Engagement Rate
  const er = posts.length ? calcErAggregate(posts, false, incClicks) : null;
  const erWith = posts.length ? calcErAggregate(posts, false, true) : null;
  const erWithout = posts.length ? calcErAggregate(posts, false, false) : null;

  // 4. Reach (input bulanan; bila kosong pakai perkiraan dari post)
  let reach = 0, rFilled = 0, rEst = 0;
  const rMissing = [];
  PLATFORMS.forEach(pl => {
    if (pl.id === 'YT Shorts') return; // reach Shorts sudah termasuk di YouTube
    const v = numOrNull((mon.reach || {})[pl.id]);
    if (v !== null) { reach += v; rFilled++; return; }
    const e = kpiReachEstimate(m, pl.id);
    if (e !== null) { reach += e; rEst++; return; }
    if (posts.some(p => p.platform === pl.id)) rMissing.push(pl.label);
  });

  // 5. Lead
  const leadsAll = (state.leads || []).filter(l => monthKey(l.date) === m);
  const leads = leadsAll.filter(l => l.qualified !== false).length;

  // 6. Views & retensi
  const views = posts.reduce((s, p) => s + Number(p.views || 0), 0);
  const viewsPrev = prevPosts.reduce((s, p) => s + Number(p.views || 0), 0);
  const viewGrowth = viewsPrev > 0 ? ((views - viewsPrev) / viewsPrev) * 100 : null;
  const retSource = ['youtube', 'facebook', 'all'].includes(st.retentionSource) ? st.retentionSource : 'youtube';
  const retention = autoRetention(retSource, posts);
  const viewerAch = (viewGrowth === null && retention === null) ? null
    : (Math.min(viewGrowth === null ? 0 : Math.max(viewGrowth, 0) / 10 * 100, cap) + Math.min(retention === null ? 0 : retention / 30 * 100, cap)) / 2;

  // 7. Brand consistency (dari checklist)
  const assessed = posts.filter(p => p.brandOk === true || p.brandOk === false);
  const brand = assessed.length ? (assessed.filter(p => p.brandOk === true).length / assessed.length) * 100 : null;

  // 8. Proyek foto/video = materi visual unik
  const visual = new Set(posts.filter(p => KPI_VISUAL_FORMATS.includes(p.format)).map(p => p.grp || p.id)).size;

  // 9 & 10
  const report = mon.reportDone ? 1 : 0;
  const team = numOrNull(mon.teamwork);

  const retLabel = retSource === 'youtube' ? 'YouTube' : (retSource === 'facebook' ? 'Facebook Reels' : 'YouTube + Facebook');
  const raw = {
    growth: { actual: growth, ach: ach(growth, 5), missing: growth === null,
      note: fPlat ? `${fPlat} platform: ${formatNum(fPrev)} → ${formatNum(fNow)} follower` : 'Isi follower akhir bulan ini dan bulan lalu di Input Bulanan' },
    content: { actual: content, ach: ach(content, 20), missing: false,
      note: `${st.contentMode === 'platform' ? 'Per platform' : 'Konten unik'} · unik ${unique} materi, per platform ${posts.length} post` },
    er: { actual: er, ach: ach(er, 5), missing: er === null, note: `Dengan klik ${fmtPct(erWith)} · tanpa klik ${fmtPct(erWithout)}` },
    reach: { actual: reach, ach: ach(reach, 100000), missing: rFilled + rEst === 0,
      note: `${rFilled} platform diisi, ${rEst} perkiraan dari post` + (rMissing.length ? ` · belum ada: ${rMissing.join(', ')}` : '') },
    leads: { actual: leads, ach: ach(leads, 30), missing: false, note: `${leadsAll.length} lead tercatat, ${leads} qualified` },
    viewer: { actual: viewGrowth, ach: viewerAch, missing: viewGrowth === null || retention === null, retention,
      note: `View growth ${fmtPct(viewGrowth, 1)} vs ${monthLabel(prev)} · retensi ${fmtPct(retention, 1)} (${retLabel})` },
    brand: { actual: brand, ach: ach(brand, 100), missing: brand === null,
      note: assessed.length ? `${assessed.length} dari ${posts.length} post sudah dinilai` : 'Belum ada post yang dinilai di checklist' },
    visual: { actual: visual, ach: ach(visual, 12), missing: false, note: 'Materi foto/video unik yang terbit' },
    report: { actual: report, ach: ach(report, 1), missing: false, note: report ? 'Ditandai selesai' : 'Belum ditandai selesai' },
    team: { actual: team, ach: ach(team, 90), missing: team === null, note: team === null ? 'Isi rating dari atasan di Input Bulanan' : 'Rating dari atasan' }
  };
  const rows = KPI_DEFS.map(def => {
    const r = raw[def.id];
    const achRaw = r.ach === null ? 0 : r.ach;
    const achC = Math.min(achRaw, cap);
    return { def, ...r, achRaw, achC, weighted: achC * def.w / 100 };
  });
  return { month: m, rows, total: rows.reduce((s, r) => s + r.weighted, 0), posts: posts.length };
}

// Periode aktif: satu bulan, atau rata-rata semua bulan penilaian
function computeKpiPeriod() {
  const months = (state.selectedMonth && state.selectedMonth !== 'ALL') ? [state.selectedMonth] : kpiMonths();
  const res = months.map(computeKpiMonth);
  if (!res.length) return { months, res, rows: [], total: 0 };
  if (res.length === 1) return { months, res, rows: res[0].rows, total: res[0].total };
  const avg = arr => { const v = arr.filter(x => x !== null && x !== undefined); return v.length ? v.reduce((s, x) => s + x, 0) / v.length : null; };
  const rows = KPI_DEFS.map((def, i) => {
    const list = res.map(r => r.rows[i]);
    return {
      def,
      actual: avg(list.map(r => r.actual)),
      retention: avg(list.map(r => r.retention)),
      achRaw: avg(list.map(r => r.achRaw)) || 0,
      achC: avg(list.map(r => r.achC)) || 0,
      weighted: avg(list.map(r => r.weighted)) || 0,
      missing: list.some(r => r.missing),
      note: 'Rata-rata ' + res.map(r => monthLabel(r.month).split(' ')[0]).join(', ')
    };
  });
  return { months, res, rows, total: avg(res.map(r => r.total)) || 0 };
}

function kpiActualText(r) {
  const a = r.actual;
  switch (r.def.id) {
    case 'growth': return fmtPct(a, 1);
    case 'content': return a === null ? '-' : (Number.isInteger(a) ? a : a.toFixed(1).replace('.', ',')) + ' konten';
    case 'er': return fmtPct(a);
    case 'reach': return a === null ? '-' : formatNum(Math.round(a));
    case 'leads': return a === null ? '-' : (Number.isInteger(a) ? a : a.toFixed(1).replace('.', ',')) + ' lead';
    case 'viewer': return `${fmtPct(a, 1)} · retensi ${fmtPct(r.retention, 1)}`;
    case 'brand': return fmtPct(a, 0);
    case 'visual': return a === null ? '-' : (Number.isInteger(a) ? a : a.toFixed(1).replace('.', ',')) + ' proyek';
    case 'report': return a === null ? '-' : (a >= 1 ? 'Selesai' : (a > 0 ? fmtPct(a * 100, 0) + ' bulan' : 'Belum'));
    case 'team': return a === null ? '-' : a.toFixed(0) + '%';
    default: return '-';
  }
}

// ---- Aksi input ----
function setKpiSetting(key, raw) {
  if (!state.kpiSettings) state.kpiSettings = {};
  if (key === 'erIncludeClicks') state.kpiSettings[key] = raw === '1';
  else if (['contentMode', 'retentionSource', 'startMonth'].includes(key)) state.kpiSettings[key] = raw;
  else state.kpiSettings[key] = (raw === '' || isNaN(Number(raw))) ? 0 : Number(raw);
  saveState();
  renderKpi();
}
function setKpiEditMonth(m) { if (m) kpiEditMonth = m; renderKpi(); }
function setMonthlyValue(m, field, platformId, raw) {
  const o = getMonthly(m);
  const v = numOrNull(raw);
  if (field === 'teamwork') o.teamwork = v;
  else if (v === null) delete o[field][platformId];
  else o[field][platformId] = v;
  saveState();
  renderKpi();
}
function setMonthlyReport(m, checked) { getMonthly(m).reportDone = !!checked; saveState(); renderKpi(); }
function toggleReportDone() {
  if (!state.selectedMonth || state.selectedMonth === 'ALL') { showToast('Pilih bulan di Periode Aktif dulu.'); return; }
  const o = getMonthly(state.selectedMonth);
  o.reportDone = !o.reportDone;
  saveState();
  updateReportDoneBtn();
  showToast(o.reportDone ? `Laporan ${monthLabel(state.selectedMonth)} ditandai selesai.` : 'Tanda selesai dibatalkan.');
}
function updateReportDoneBtn() {
  const btn = document.getElementById('reportDoneBtn');
  if (!btn) return;
  const all = !state.selectedMonth || state.selectedMonth === 'ALL';
  const done = !all && peekMonthly(state.selectedMonth).reportDone;
  btn.innerHTML = `<i data-lucide="${done ? 'check-circle-2' : 'circle'}" class="w-4 h-4"></i> ${all ? 'Pilih bulan untuk menandai laporan' : (done ? 'Laporan ' + monthLabel(state.selectedMonth) + ' selesai' : 'Tandai laporan ' + monthLabel(state.selectedMonth) + ' selesai')}`;
  if (window.lucide) lucide.createIcons();
}
let leadEditId = null;
function leadSources() {
  return PLATFORMS.map(p => ({ id: p.id, label: p.label })).concat([{ id: 'Email', label: 'Email' }, { id: 'Lainnya', label: 'Lainnya' }]);
}
function autoGrow(el) { if (!el) return; el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; }
function escHtml(t) { return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function saveLead() {
  const v = id => (document.getElementById(id)?.value || '').trim();
  const date = v('leadDate'), name = v('leadName');
  if (!date || !name) { showToast('Isi tanggal dan nama lead.'); return; }
  if (!state.leads) state.leads = [];
  const data = {
    date, name,
    source: v('leadSource'),
    company: v('leadCompany'),
    contact: v('leadContact'),
    purpose: v('leadPurpose'),
    followUp: v('leadFollowUp'),
    qualified: document.getElementById('leadQualified').checked
  };
  if (leadEditId) {
    const l = state.leads.find(x => x.id === leadEditId);
    if (l) Object.assign(l, data);
    showToast('Lead diperbarui.');
  } else {
    state.leads.push({ id: 'lead-' + Date.now(), ...data });
    showToast('Lead tersimpan.');
  }
  leadEditId = null;
  saveState();
  renderKpi();
}
function addLead() { saveLead(); }
function editLead(id) {
  const l = (state.leads || []).find(x => x.id === id);
  if (!l) return;
  leadEditId = id;
  renderKpi();
  document.getElementById('kpi-leads')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function cancelLeadEdit() { leadEditId = null; renderKpi(); }
function toggleLeadQualified(id) {
  const l = (state.leads || []).find(x => x.id === id);
  if (!l) return;
  l.qualified = l.qualified === false;
  saveState();
  renderKpi();
}
function deleteLead(id) {
  if (!confirm('Hapus lead ini?')) return;
  state.leads = (state.leads || []).filter(l => l.id !== id);
  saveState();
  renderKpi();
}
function setBrandOk(postId, val) {
  const p = state.posts.find(x => x.id === postId);
  if (!p) return;
  if (val === 'yes') p.brandOk = true;
  else if (val === 'no') p.brandOk = false;
  else delete p.brandOk;
  saveState();
  renderKpi();
}
function setAllBrandOk(m) {
  const list = state.posts.filter(p => monthKey(p.date) === m && p.brandOk !== false);
  if (!confirm(`Tandai ${list.length} post ${monthLabel(m)} yang belum dinilai/sesuai sebagai "sesuai guideline"? Post yang sudah ditandai tidak sesuai tidak diubah.`)) return;
  list.forEach(p => { p.brandOk = true; });
  saveState();
  renderKpi();
}

// ---- Render ----
function renderKpi() {
  const k = computeKpiPeriod();
  const isAll = !state.selectedMonth || state.selectedMonth === 'ALL';
  const colorOf = a => a >= 100 ? 'text-emerald-600' : (a >= 75 ? 'text-amber-600' : 'text-rose-600');
  const periodText = !k.months.length ? 'Belum ada data' : (isAll ? `Rata-rata ${k.months.map(m => monthLabel(m)).join(' & ')}` : monthLabel(k.months[0]));
  const el = id => document.getElementById(id);

  el('kpi-period').innerText = periodText;

  el('kpi-tbody').innerHTML = k.rows.map((r, i) => `
    <tr class="border-t border-slate-200 align-top">
      <td class="py-3 px-3 text-slate-500">${i + 1}</td>
      <td class="py-3 px-3"><div class="font-bold text-slate-900">${r.def.name}</div><div class="text-[10px] text-slate-500">${r.def.target}</div></td>
      <td class="py-3 px-3 min-w-[200px]"><div class="font-bold text-slate-900">${kpiActualText(r)}</div><div class="text-[10px] text-slate-500">${r.note || ''}</div>${r.missing ? '<div class="text-[10px] text-rose-600 mt-1 font-semibold">Data belum lengkap, dihitung 0</div>' : ''}</td>
      <td class="py-3 px-3 whitespace-nowrap"><span class="font-bold ${colorOf(r.achC)}">${r.achC.toFixed(1).replace('.', ',')}%</span>${(r.achRaw > r.achC + 0.05) ? `<div class="text-[10px] text-slate-500">asli ${r.achRaw.toFixed(0)}% (dibatasi)</div>` : ''}</td>
      <td class="py-3 px-3 text-slate-600">${r.def.w}%</td>
      <td class="py-3 px-3 font-bold text-amber-600">${r.weighted.toFixed(2).replace('.', ',')}</td>
    </tr>`).join('') + `
    <tr class="border-t-2 border-slate-200 bg-slate-50">
      <td></td><td class="py-3 px-3 font-bold text-slate-900">TOTAL</td><td></td><td></td>
      <td class="py-3 px-3 text-slate-600">${KPI_DEFS.reduce((t, d) => t + d.w, 0)}%</td>
      <td class="py-3 px-3 font-bold text-amber-600">${k.total.toFixed(2).replace('.', ',')}</td>
    </tr>`;

  const missingCount = k.rows.filter(r => r.missing).length;
  const lost = k.rows.map(r => ({ def: r.def, lost: Math.max(0, 100 - r.achC) * r.def.w / 100 })).filter(r => r.lost > 0.05).sort((a, b) => b.lost - a.lost).slice(0, 3);
  el('kpi-summary').innerHTML = `
    <div class="bg-white border border-slate-200 rounded-2xl p-4">
      <div class="text-[10px] text-slate-500 font-semibold">Skor Total</div>
      <div class="text-3xl font-bold text-slate-900 mt-1">${k.total.toFixed(1).replace('.', ',')}%</div>
      <div class="text-xs font-bold ${colorOf(k.total)} mt-1">${kpiRating(k.total)}</div>
    </div>
    <div class="bg-white border border-slate-200 rounded-2xl p-4">
      <div class="text-[10px] text-slate-500 font-semibold">KPI Datanya Belum Lengkap</div>
      <div class="text-3xl font-bold ${missingCount ? 'text-rose-600' : 'text-emerald-600'} mt-1">${missingCount} <span class="text-sm font-normal text-slate-500">dari ${KPI_DEFS.length}</span></div>
      <div class="text-[11px] text-slate-500 mt-1">Lengkapi lewat Input Bulanan, Log Lead, dan Checklist di bawah</div>
    </div>
    <div class="bg-white border border-slate-200 rounded-2xl p-4">
      <div class="text-[10px] text-slate-500 font-semibold">Poin Paling Banyak Hilang</div>
      <div class="text-xs text-slate-900 mt-2 space-y-1">${lost.length ? lost.map(r => `<div class="flex justify-between gap-2"><span class="truncate">${r.def.name}</span><span class="font-bold text-rose-600 shrink-0">−${r.lost.toFixed(1).replace('.', ',')}</span></div>`).join('') : '<span class="text-emerald-600 font-semibold">Semua KPI mencapai target</span>'}</div>
    </div>`;

  // Input bulanan
  const isAllPeriod = !state.selectedMonth || state.selectedMonth === 'ALL';
  const m = kpiActiveMonth();
  const allNote = isAllPeriod ? `<span class="block text-[11px] text-amber-700 mt-0.5">Periode Aktif = All, jadi yang tampil ${monthLabel(m)}. Pilih bulan di Periode Aktif untuk mengisi bulan lain.</span>` : '';
  const mon = peekMonthly(m);
  const inputCls = 'w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-shacman-blue';
  const val = v => (v === null || v === undefined) ? '' : v;
  el('kpi-monthly').innerHTML = `
    <div class="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h4 class="text-sm font-bold text-slate-900">Input Bulanan — ${monthLabel(m)}</h4>
        <p class="text-[11px] text-slate-500 mt-0.5">Diisi sekali per bulan dari ringkasan tiap platform. Nilai Agustus–Oktober sudah diisi dari data laporan; koreksi bila perlu.</p>
        ${allNote}
      </div>
    </div>
    <div class="overflow-x-auto mt-3">
      <table class="w-full text-xs">
        <thead class="text-[10px] text-slate-500"><tr><th class="text-left py-2 pr-3">Platform</th><th class="text-left py-2 pr-3">Follower akhir bulan</th><th class="text-left py-2">Reach bulan ini</th></tr></thead>
        <tbody>
          ${PLATFORMS.map(pl => {
            const est = kpiReachEstimate(m, pl.id);
            return `<tr class="border-t border-slate-200">
              <td class="py-1.5 pr-3 text-slate-900 font-semibold whitespace-nowrap">${pl.label}</td>
              <td class="py-1.5 pr-3">${pl.id === 'YT Shorts' ? '<span class="text-[10px] text-slate-500">dihitung di YouTube</span>' : `<input type="number" min="0" value="${val(mon.followers && mon.followers[pl.id])}" placeholder="-" onchange="setMonthlyValue('${m}','followers','${pl.id}',this.value)" class="${inputCls}">`}</td>
              <td class="py-1.5">${pl.id === 'YT Shorts' ? '<span class="text-[10px] text-slate-500">dihitung di YouTube</span>' : `<input type="number" min="0" value="${val(mon.reach && mon.reach[pl.id])}" placeholder="${est !== null ? 'perkiraan ' + formatNum(est) : '-'}" onchange="setMonthlyValue('${m}','reach','${pl.id}',this.value)" class="${inputCls}">`}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div class="flex flex-wrap items-center gap-5 mt-3">
      <label class="text-[11px] text-slate-600 flex items-center gap-2"><input type="checkbox" ${mon.reportDone ? 'checked' : ''} onchange="setMonthlyReport('${m}', this.checked)"> Laporan bulanan ${monthLabel(m)} selesai</label>
    </div>`;

  // Log lead
  const leads = (state.leads || []).filter(l => isAllPeriod || monthKey(l.date) === m).sort((a, b) => a.date.localeCompare(b.date));
  const todayStr = new Date().toISOString().slice(0, 10);
  const defaultLeadDate = (isAllPeriod || todayStr.slice(0, 7) === m) ? todayStr : m + '-01';
  const ed = leadEditId ? (state.leads || []).find(l => l.id === leadEditId) : null;
  const ev = k => ed ? escHtml(ed[k] || '') : '';
  el('kpi-leads').innerHTML = `
    <h4 class="text-sm font-bold text-slate-900">Log Lead — ${isAllPeriod ? 'Semua periode' : monthLabel(m)}</h4>
    <p class="text-[11px] text-slate-500 mt-0.5">Catat setiap calon pembeli dari media sosial atau email. Centang "qualified" bila benar-benar prospek. Daftar ini ikut tercetak di laporan bulanan.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
      <label class="text-[11px] text-slate-600 flex flex-col gap-1">Tanggal<input type="date" id="leadDate" value="${ed ? ed.date : defaultLeadDate}" class="${inputCls}"></label>
      <label class="text-[11px] text-slate-600 flex flex-col gap-1">Sumber<select id="leadSource" class="${inputCls}">${leadSources().map(s => `<option value="${s.id}" ${ed && ed.source === s.id ? 'selected' : ''}>${s.label}</option>`).join('')}</select></label>
      <label class="text-[11px] text-slate-600 flex flex-col gap-1">Nama<input type="text" id="leadName" value="${ev('name')}" placeholder="Nama orang" class="${inputCls}"></label>
      <label class="text-[11px] text-slate-600 flex flex-col gap-1">Perusahaan<input type="text" id="leadCompany" value="${ev('company')}" placeholder="mis. PT Tambang Maju" class="${inputCls}"></label>
      <label class="text-[11px] text-slate-600 flex flex-col gap-1 sm:col-span-2 lg:col-span-4">Email / nama akun<input type="text" id="leadContact" value="${ev('contact')}" placeholder="nama@email.com atau @akun" class="${inputCls}"></label>
      <label class="text-[11px] text-slate-600 flex flex-col gap-1 sm:col-span-2">Keperluan<textarea id="leadPurpose" rows="3" oninput="autoGrow(this)" placeholder="mis. tanya harga H3000S untuk armada tambang" class="${inputCls} resize-none overflow-hidden leading-relaxed">${ev('purpose')}</textarea></label>
      <label class="text-[11px] text-slate-600 flex flex-col gap-1 sm:col-span-2">Follow up<textarea id="leadFollowUp" rows="3" oninput="autoGrow(this)" placeholder="mis. diteruskan ke tim sales 12 Nov, menunggu penawaran" class="${inputCls} resize-none overflow-hidden leading-relaxed">${ev('followUp')}</textarea></label>
    </div>
    <div class="flex flex-wrap items-center gap-3 mt-2">
      <label class="text-[11px] text-slate-600 flex items-center gap-1"><input type="checkbox" id="leadQualified" ${!ed || ed.qualified !== false ? 'checked' : ''}> qualified</label>
      <button onclick="saveLead()" class="ml-auto px-3 py-1.5 rounded-lg bg-shacman-blue hover:bg-blue-600 text-white text-xs font-bold">${ed ? 'Simpan perubahan' : 'Tambah lead'}</button>
      ${ed ? '<button onclick="cancelLeadEdit()" class="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600">Batal</button>' : ''}
    </div>
    <div class="mt-3 overflow-x-auto">${leads.length ? `
      <table class="w-full text-xs">
        <thead class="text-[10px] text-slate-500 bg-slate-50"><tr>
          <th class="text-left py-2 px-2">Tanggal</th><th class="text-left py-2 px-2">Sumber</th><th class="text-left py-2 px-2">Nama</th><th class="text-left py-2 px-2">Perusahaan</th><th class="text-left py-2 px-2">Email / akun</th><th class="text-left py-2 px-2">Keperluan</th><th class="text-left py-2 px-2">Follow up</th><th class="text-left py-2 px-2">Status</th><th></th>
        </tr></thead>
        <tbody>${leads.map(l => `
          <tr class="border-t border-slate-200 align-top ${l.id === leadEditId ? 'bg-blue-50' : ''}">
            <td class="py-2 px-2 whitespace-nowrap text-slate-600">${l.date}</td>
            <td class="py-2 px-2 whitespace-nowrap text-slate-600">${escHtml(l.source)}</td>
            <td class="py-2 px-2 font-semibold text-slate-900">${escHtml(l.name)}</td>
            <td class="py-2 px-2 text-slate-700">${escHtml(l.company || '-')}</td>
            <td class="py-2 px-2 text-slate-700 break-all">${escHtml(l.contact || '-')}</td>
            <td class="py-2 px-2 text-slate-700">${escHtml(l.purpose || '-')}</td>
            <td class="py-2 px-2 text-slate-700">${escHtml(l.followUp || '-')}</td>
            <td class="py-2 px-2"><button onclick="toggleLeadQualified('${l.id}')" class="text-[10px] px-2 py-0.5 rounded border whitespace-nowrap ${l.qualified !== false ? 'border-emerald-200 text-emerald-700 bg-emerald-50' : 'border-slate-200 text-slate-500'}">${l.qualified !== false ? 'qualified' : 'belum qualified'}</button></td>
            <td class="py-2 px-2 whitespace-nowrap text-right">
              <button onclick="editLead('${l.id}')" title="Edit" class="text-slate-600 hover:text-shacman-blue mr-1"><i data-lucide="edit-3" class="w-3.5 h-3.5"></i></button>
              <button onclick="deleteLead('${l.id}')" title="Hapus" class="text-rose-600 hover:text-rose-700"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
            </td>
          </tr>`).join('')}</tbody>
      </table>` : `<div class="text-[11px] text-slate-500">${isAllPeriod ? 'Belum ada lead tercatat.' : 'Belum ada lead di bulan ini.'}</div>`}</div>`;

  ['leadPurpose', 'leadFollowUp'].forEach(id => autoGrow(document.getElementById(id)));

  // Checklist brand guideline
  const mp = state.posts.filter(p => monthKey(p.date) === m).sort((a, b) => a.date.localeCompare(b.date));
  const done = mp.filter(p => p.brandOk === true || p.brandOk === false).length;
  const btn = (p, v, label, on) => `<button onclick="setBrandOk('${p.id}','${v}')" class="text-[10px] px-2 py-0.5 rounded border ${on ? (v === 'yes' ? 'border-emerald-200 text-emerald-600 bg-emerald-50' : 'border-rose-200 text-rose-600 bg-rose-50') : 'border-slate-200 text-slate-500'}">${label}</button>`;
  el('kpi-brand').innerHTML = `
    <details>
      <summary class="cursor-pointer text-sm font-bold text-slate-900">Checklist Brand Guideline — ${monthLabel(m)}${isAllPeriod ? ' (bulan terakhir)' : ''} <span class="text-[11px] font-normal text-slate-500">(${done} dari ${mp.length} post dinilai)</span></summary>
      <div class="flex justify-end mt-3"><button onclick="setAllBrandOk('${m}')" class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 hover:border-shacman-blue">Tandai semua sesuai</button></div>
      <div class="mt-2 space-y-1 max-h-96 overflow-y-auto">${mp.map(p => `
        <div class="flex items-center gap-3 text-xs border-b border-slate-200 py-1.5">
          <span class="text-slate-500 w-20 shrink-0">${p.date}</span>
          <span class="text-slate-500 w-24 shrink-0 truncate">${p.platform}</span>
          <span class="text-slate-900 flex-1 truncate">${p.title}</span>
          ${btn(p, 'yes', 'Sesuai', p.brandOk === true)} ${btn(p, 'no', 'Tidak', p.brandOk === false)}
        </div>`).join('') || '<div class="text-[11px] text-slate-500">Tidak ada post di bulan ini.</div>'}</div>
    </details>`;

  // Pengaturan
  const st = state.kpiSettings || {};
  const selCls = 'bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-shacman-blue';
  el('kpi-settings').innerHTML = `
    <label class="text-[11px] text-slate-600 flex flex-col gap-1">Bulan awal penilaian
      <input type="month" value="${st.startMonth || '2026-09'}" onchange="setKpiSetting('startMonth', this.value)" class="${selCls}"></label>
    <label class="text-[11px] text-slate-600 flex flex-col gap-1">Batas capaian per KPI (%) — 0 = tanpa batas
      <input type="number" min="0" step="1" value="${st.cap ?? 120}" onchange="setKpiSetting('cap', this.value)" class="${selCls} w-24"></label>
    <label class="text-[11px] text-slate-600 flex flex-col gap-1">ER menghitung klik?
      <select onchange="setKpiSetting('erIncludeClicks', this.value)" class="${selCls}">
        <option value="1" ${st.erIncludeClicks !== false ? 'selected' : ''}>Ya (sesuai deskripsi KPI)</option>
        <option value="0" ${st.erIncludeClicks === false ? 'selected' : ''}>Tidak (interaksi saja)</option>
      </select></label>
    <label class="text-[11px] text-slate-600 flex flex-col gap-1">Hitungan konten
      <select onchange="setKpiSetting('contentMode', this.value)" class="${selCls}">
        <option value="unique" ${st.contentMode !== 'platform' ? 'selected' : ''}>Konten unik (materi sama = 1)</option>
        <option value="platform" ${st.contentMode === 'platform' ? 'selected' : ''}>Per platform (tiap post dihitung)</option>
      </select></label>
    <label class="text-[11px] text-slate-600 flex flex-col gap-1">Sumber retensi
      <select onchange="setKpiSetting('retentionSource', this.value)" class="${selCls}">
        <option value="youtube" ${(st.retentionSource || 'youtube') === 'youtube' ? 'selected' : ''}>YouTube (avg % ditonton)</option>
        <option value="facebook" ${st.retentionSource === 'facebook' ? 'selected' : ''}>Facebook Reels</option>
        <option value="all" ${st.retentionSource === 'all' ? 'selected' : ''}>Gabungan YouTube + Facebook</option>
      </select></label>`;
}

// Hanya merender tab yang sedang aktif (tab lain dirender saat dibuka)
function renderAll() {
  updateSidebarBadges();
  const renderers = {
    'dashboard': renderDashboard,
    'content-plan': renderContentPlan,
    'idea-bank': renderIdeaBank,
    'post-data': renderPostData,
    'monthly-report': renderMonthlyReport,
    'kpi': renderKpi,
    'brand-kit': renderBrandKit
  };
  (renderers[currentTab] || renderDashboard)();
  lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  lastDataJson = dataJson(state);
  updateUndoButtons();
  const monthInput = document.getElementById('globalMonthFilter');
  if (state.selectedMonth && state.selectedMonth !== 'ALL') {
    monthInput.value = state.selectedMonth;
  }
  monthInput.addEventListener('change', (e) => {
    state.selectedMonth = e.target.value || 'ALL';
    saveState();
    renderAll();
  });

  renderAll();

  // Pengingat backup (data hanya tersimpan di browser ini)
  try {
    const last = Number(localStorage.getItem(BACKUP_KEY) || 0);
    const days = last ? (Date.now() - last) / 86400000 : Infinity;
    if (days >= 7) {
      showToast(last
        ? `Sudah ${Math.floor(days)} hari sejak backup terakhir. Klik Backup JSON.`
        : 'Belum pernah backup. Klik Backup JSON agar data aman.', 6000);
    }
  } catch (e) {}
});
