const fs = require('fs')
const path = require('path')

const ALL_CITIES_BY_STATE = {
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh",
    "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti",
    "Bhadohi", "Bijnor", "Badaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah",
    "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar (Noida)", "Ghaziabad",
    "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun (Orai)",
    "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi",
    "Kheri (Lakhimpur)", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri",
    "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh",
    "Prayagraj (Allahabad)", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar",
    "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur",
    "Unnao", "Varanasi", "Noida", "Greater Noida", "Modinagar", "Vrindavan"
  ],
  "Gujarat": [
    "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar",
    "Anand", "Navsari", "Morbi", "Nadiad (Kheda)", "Surendranagar", "Bharuch", "Mehsana", "Bhuj (Kutch)",
    "Porbandar", "Palanpur (Banaskantha)", "Valsad", "Vapi", "Gondal", "Veraval (Gir Somnath)",
    "Godhra (Panchmahal)", "Patan", "Kalol", "Dahod", "Botad", "Amreli", "Deesa", "Jetpur",
    "Modasa (Aravalli)", "Palitana", "Kadi", "Visnagar", "Himatnagar (Sabarkantha)", "Vyara (Tapi)",
    "Ankleshwar", "Bardoli", "Siddhpur", "Sanand", "Viramgam", "Bavla", "Dholka", "Dhandhuka",
    "Gandhidham", "Anjar", "Mandvi", "Mahuva", "Dwarka", "Chhota Udaipur", "Mahisagar (Lunawada)",
    "Dang (Ahwa)", "Narmada (Rajpipla)", "Kapadvanj", "Halol", "Dhoraji", "Wankaner", "Wadhwan",
    "Idar", "Prantij", "Unjha", "Vadnagar", "Petlad", "Borsad", "Bilimora", "Dharampur"
  ],
  "Maharashtra": [
    "Mumbai", "Mumbai Suburban", "Pune", "Nagpur", "Nashik", "Thane", "Navi Mumbai",
    "Chhatrapati Sambhajinagar (Aurangabad)", "Solapur", "Kolhapur", "Jalgaon", "Dhule", "Amravati",
    "Nanded", "Sangli", "Satara", "Akola", "Latur", "Ahmednagar", "Chandrapur", "Parbhani", "Jalna",
    "Beed", "Raigad (Alibag)", "Ratnagiri", "Sindhudurg", "Dharashiv (Osmanabad)", "Yavatmal",
    "Wardha", "Bhandara", "Gondia", "Gadchiroli", "Washim", "Buldhana", "Palghar", "Nandurbar",
    "Kalyan-Dombivli", "Vasai-Virar", "Pimpri-Chinchwad", "Mira-Bhayandar", "Panvel", "Malegaon",
    "Ichalkaranji", "Baramati"
  ],
  "Rajasthan": [
    "Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bhilwara", "Alwar", "Sikar",
    "Bharatpur", "Pali", "Sri Ganganagar", "Hanumangarh", "Jhunjhunu", "Churu", "Chittorgarh",
    "Nagaur", "Tonk", "Barmer", "Jaisalmer", "Sirohi", "Abu Road", "Mount Abu", "Banswara",
    "Dungarpur", "Rajsamand", "Jhalawar", "Baran", "Bundi", "Dausa", "Dholpur", "Karauli",
    "Pratapgarh", "Sawai Madhopur", "Balotra", "Beawar", "Didwana-Kuchaman", "Phalodi", "Salumbar",
    "Shahpura", "Kekri", "Kotputli-Behror", "Neem Ka Thana", "Khairthal-Tijara", "Deeg", "Sanchore"
  ],
  "Madhya Pradesh": [
    "Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain", "Ratlam", "Sagar", "Satna", "Rewa",
    "Dewas", "Shivpuri", "Chhindwara", "Morena", "Bhind", "Guna", "Vidisha", "Khargone", "Khandwa",
    "Sehore", "Betul", "Harda", "Hoshangabad (Narmadapuram)", "Raisen", "Katni", "Damoh",
    "Mandsaur", "Neemuch", "Singrauli", "Burhanpur", "Dhar", "Barwani", "Rajgarh", "Shajapur",
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Chhatarpur", "Datia",
    "Dindori", "Jhabua", "Mandla", "Narsinghpur", "Niwari", "Panna", "Seoni", "Shahdol", "Sheopur",
    "Sidhi", "Tikamgarh", "Umaria"
  ],
  "Bihar": [
    "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif (Nalanda)",
    "Arrah (Bhojpur)", "Begusarai", "Katihar", "Munger", "Chhapra (Saran)", "Danapur", "Saharsa",
    "Sasaram (Rohtas)", "Hajipur (Vaishali)", "Dehri", "Bettiah (West Champaran)", "Motihari (East Champaran)",
    "Siwan", "Kishanganj", "Buxar", "Samastipur", "Madhubani", "Gopalganj", "Sitamarhi", "Jamui",
    "Jehanabad", "Aurangabad", "Nawada", "Araria", "Banka", "Bhabua (Kaimur)", "Khagaria",
    "Lakhisarai", "Madhepura", "Sheikhpura", "Sheohar", "Supaul", "Arwal"
  ],
  "Delhi (NCT)": [
    "Delhi", "New Delhi", "Central Delhi", "East Delhi", "North Delhi", "North East Delhi",
    "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi",
    "Connaught Place", "Dwarka", "Rohini", "Karol Bagh", "Lajpat Nagar", "Saket", "Chandni Chowk",
    "Janakpuri", "Mayur Vihar"
  ],
  "Haryana": [
    "Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal",
    "Sonipat", "Panchkula", "Bhiwani", "Sirsa", "Bahadurgarh", "Jind", "Thanesar (Kurukshetra)",
    "Kaithal", "Rewari", "Palwal", "Fatehabad", "Jhajjar", "Charkhi Dadri", "Mahendragarh", "Nuh"
  ],
  "Punjab": [
    "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali (SAS Nagar)", "Hoshiarpur",
    "Batala", "Pathankot", "Moga", "Abohar", "Malerkotla", "Khanna", "Phagwara", "Muktsar", "Barnala",
    "Firozpur", "Kapurthala", "Sangrur", "Fazilka", "Gurdaspur", "Ropar (Rupnagar)", "Fatehgarh Sahib",
    "Mansa", "Nawanshahr (SBS Nagar)", "Tarn Taran", "Faridkot"
  ],
  "Karnataka": [
    "Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Hubballi-Dharwad", "Mangaluru (Dakshina Kannada)",
    "Belagavi", "Kalaburagi", "Davanagere", "Ballari", "Vijayapura", "Shivamogga", "Tumakuru",
    "Raichur", "Bidar", "Hosapete (Vijayanagara)", "Gadag", "Udupi", "Hassan", "Kolar", "Mandya",
    "Chikkamagaluru", "Bagalkote", "Chitradurga", "Haveri", "Yadgir", "Kodagu", "Chamarajanagar",
    "Ramanagara", "Koppal", "Uttara Kannada (Karwar)", "Chikkaballapura"
  ],
  "Tamil Nadu": [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore",
    "Tirunelveli", "Thoothukudi", "Dindigul", "Thanjavur", "Ranipet", "Sivakasi", "Karur",
    "Udhagamandalam (Ooty/Nilgiris)", "Kanchipuram", "Cuddalore", "Nagapattinam", "Hosur",
    "Nagercoil (Kanyakumari)", "Chengalpattu", "Villupuram", "Namakkal", "Pudukkottai", "Dharmapuri",
    "Theni", "Ramanathapuram", "Virudhunagar", "Tiruvannamalai", "Krishnagiri", "Tenkasi",
    "Kallakurichi", "Mayiladuthurai", "Ariyalur", "Perambalur", "Sivaganga", "Tirupathur", "Tiruvallur", "Tiruvarur"
  ],
  "West Bengal": [
    "Kolkata", "Howrah", "North 24 Parganas", "South 24 Parganas", "Hooghly", "Paschim Medinipur",
    "Purba Medinipur", "Paschim Bardhaman (Asansol/Durgapur)", "Purba Bardhaman", "Nadia", "Murshidabad",
    "Malda", "Jalpaiguri", "Darjeeling", "Siliguri", "Alipurduar", "Cooch Behar", "Uttar Dinajpur",
    "Dakshin Dinajpur", "Bankura", "Purulia", "Birbhum", "Jhargram", "Kalimpong"
  ],
  "Andhra Pradesh": [
    "Visakhapatnam", "Vijayawada (NTR)", "Guntur", "Nellore (SPSR Nellore)", "Kurnool", "Kakinada",
    "Rajamahendravaram (East Godavari)", "Tirupati", "Kadapa (YSR)", "Anantapur", "Vizianagaram",
    "Eluru", "Ongole (Prakasam)", "Nandyal", "Machilipatnam (Krishna)", "Srikakulam", "Chittoor",
    "Bapatla", "Palnadu", "Anakapalli", "Dr. B.R. Ambedkar Konaseema", "Alluri Sitharama Raju",
    "Annamayya", "Parvathipuram Manyam", "Sri Sathya Sai", "Bhimavaram (West Godavari)"
  ],
  "Telangana": [
    "Hyderabad", "Warangal", "Hanumakonda", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam (Peddapalli)",
    "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet", "Siddipet", "Miryalaguda", "Jagtial", "Nirmal",
    "Kamareddy", "Kothagudem (Bhadradri)", "Mancherial", "Sangareddy", "Medak", "Medchal-Malkajgiri",
    "Ranga Reddy", "Vikarabad", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Mahabubabad",
    "Mulugu", "Nagarkurnool", "Narayanpet", "Rajanna Sircilla", "Wanaparthy", "Yadadri Bhuvanagiri"
  ],
  "Kerala": [
    "Thiruvananthapuram", "Kochi (Ernakulam)", "Kozhikode", "Thrissur", "Kollam", "Palakkad",
    "Alappuzha", "Kannur", "Kottayam", "Malappuram", "Kasaragod", "Pathanamthitta", "Idukki", "Wayanad"
  ],
  "Odisha": [
    "Bhubaneswar (Khordha)", "Cuttack", "Rourkela (Sundargarh)", "Berhampur (Ganjam)", "Sambalpur",
    "Puri", "Balasore", "Bhadrak", "Baripada (Mayurbhanj)", "Jharsuguda", "Jeypore (Koraput)",
    "Angul", "Dhenkanal", "Bargarh", "Rayagada", "Kendujhar", "Jagatsinghpur", "Kendrapara",
    "Balangir", "Kalahandi", "Boudh", "Deogarh", "Gajapati", "Jajpur", "Kandhamal", "Malkangiri",
    "Nabarangpur", "Nayagarh", "Nuapada", "Subarnapur"
  ],
  "Jharkhand": [
    "Ranchi", "Jamshedpur (East Singhbhum)", "Dhanbad", "Bokaro", "Deoghar", "Phusro", "Hazaribagh",
    "Giridih", "Ramgarh", "Medininagar (Palamu)", "Chaibasa (West Singhbhum)", "Dumka", "Sahibganj",
    "Godda", "Gumla", "Simdega", "Latehar", "Koderma", "Chatra", "Jamtara", "Pakur", "Khunti",
    "Saraikela Kharsawan", "Garhwa", "Lohardaga"
  ],
  "Chhattisgarh": [
    "Raipur", "Bhilai (Durg)", "Bilaspur", "Korba", "Rajnandgaon", "Jagdalpur (Bastar)", "Raigarh",
    "Ambikapur (Surguja)", "Dhamtari", "Mahasamund", "Kanker", "Kawardha (Kabirdham)", "Janjgir-Champa",
    "Bemetara", "Balod", "Baloda Bazar", "Surajpur", "Balrampur", "Korea", "Jashpur", "Dantewada",
    "Sukma", "Bijapur", "Narayanpur", "Gariaband", "Mungeli", "Kondagaon", "Gaurela-Pendra-Marwahi",
    "Khairagarh", "Manendragarh", "Mohla-Manpur", "Sarangarh", "Sakti"
  ],
  "Assam": [
    "Guwahati (Kamrup Metropolitan)", "Silchar (Cachar)", "Dibrugarh", "Jorhat", "Nagaon",
    "Tinsukia", "Tezpur (Sonitpur)", "Bongaigaon", "Karimganj", "Sivasagar", "Goalpara", "Barpeta",
    "Dhubri", "North Lakhimpur", "Diphu (Karbi Anglong)", "Golaghat", "Hailakandi", "Darrang",
    "Morigaon", "Nalbari", "Kokrajhar", "Udalguri", "Baksa", "Chirang", "Dima Hasao", "Kamrup Rural",
    "Biswanath", "Charaideo", "Dhemaji", "Hojai", "Majuli", "South Salmara-Mankachar", "Tamulpur", "West Karbi Anglong"
  ],
  "Uttarakhand": [
    "Dehradun", "Haridwar", "Roorkee", "Haldwani (Nainital)", "Rudrapur (Udham Singh Nagar)",
    "Rishikesh", "Kashipur", "Pithoragarh", "Almora", "Tehri Garhwal", "Pauri Garhwal", "Chamoli",
    "Uttarkashi", "Bageshwar", "Champawat", "Rudraprayag"
  ],
  "Himachal Pradesh": [
    "Shimla", "Dharamshala (Kangra)", "Solan", "Mandi", "Kullu", "Baddi", "Bilaspur", "Chamba",
    "Hamirpur", "Una", "Nahan (Sirmaur)", "Kinnaur", "Lahaul and Spiti"
  ],
  "Jammu and Kashmir": [
    "Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua", "Udhampur", "Sopore", "Pulwama",
    "Kupwara", "Budgam", "Rajouri", "Poonch", "Bandipora", "Doda", "Ganderbal", "Kishtwar",
    "Kulgam", "Ramban", "Reasi", "Samba", "Shopian"
  ],
  "Ladakh": [
    "Leh", "Kargil"
  ],
  "Goa": [
    "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "North Goa", "South Goa"
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Daman", "Diu", "Silvassa"
  ],
  "Chandigarh": [
    "Chandigarh"
  ],
  "Puducherry": [
    "Puducherry", "Karaikal", "Mahe", "Yanam"
  ],
  "Andaman and Nicobar Islands": [
    "Port Blair", "South Andaman", "North and Middle Andaman", "Nicobar"
  ],
  "Lakshadweep": [
    "Kavaratti", "Agatti", "Amini", "Andrott"
  ],
  "Sikkim": [
    "Gangtok", "Gyalshing", "Mangan", "Namchi", "Pakyong", "Soreng"
  ],
  "Tripura": [
    "Agartala (West Tripura)", "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti"
  ],
  "Meghalaya": [
    "Shillong (East Khasi Hills)", "Tura (West Garo Hills)", "Jowai (West Jaintia Hills)", "Nongpoh (Ri Bhoi)",
    "East Garo Hills", "East Jaintia Hills", "North Garo Hills", "South Garo Hills",
    "South West Garo Hills", "South West Khasi Hills", "West Khasi Hills"
  ],
  "Manipur": [
    "Imphal West", "Imphal East", "Bishnupur", "Churachandpur", "Thoubal", "Kakching", "Senapati",
    "Ukhrul", "Chandel", "Jiribam", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Tamenglong", "Tengnoupal"
  ],
  "Mizoram": [
    "Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Saiha", "Mamit",
    "Hnahthial", "Khawzawl", "Saitual"
  ],
  "Nagaland": [
    "Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zünheboto", "Mon", "Phek",
    "Kiphire", "Longleng", "Peren", "Chümoukedima", "Niuland", "Noklak", "Shamator", "Tseminyü"
  ],
  "Arunachal Pradesh": [
    "Itanagar (Papum Pare)", "Tawang", "Pasighat (East Siang)", "Ziro (Lower Subansiri)", "Bomdila (West Kameng)",
    "Tezu (Lohit)", "Naharlagun", "Aalo (West Siang)", "Changlang", "Namsai", "Roing (Lower Dibang Valley)"
  ]
}

// Flatten into an array of { name, state }
const citiesList = []
for (const [state, cities] of Object.entries(ALL_CITIES_BY_STATE)) {
  for (const city of cities) {
    citiesList.push({ name: city, state: state })
  }
}

const outputPath = path.join(__dirname, '..', 'src', 'data', 'all_india_cities.json')
fs.writeFileSync(outputPath, JSON.stringify(citiesList, null, 2), 'utf-8')
// console.log(`Generated ${citiesList.length} cities/districts across ${Object.keys(ALL_CITIES_BY_STATE).length} states & UTs to ${outputPath}`)
