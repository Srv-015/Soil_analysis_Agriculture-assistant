var state_arr = [
    "Andaman & Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra & Nagar Haveli",
    "Daman & Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

var s_a = new Array();
s_a[0]="";
s_a[1]="Alipur|Bamboo Flat|Malappuram|Port Blair";
s_a[2]="Alampur|Anantapur|Badvel|Bellampalli|Bobbili|Bodhan|Chittoor|Chodavaram|Cuddapah|Cumbum|Dharmavaram|Gooty|Guntur|Hindupur|Hyderabad|Jammalamadugu|Jangaon|Kadiri|Kalyandurg|Kanigiri|Khammam|Kuppam|Mandapeta|Mangalagiri|Manthani|Medak|Nalgonda|Narasaraopet|Nellore|Nirmal|Ongole|Peddapalli|Penukonda|Pulivendla|Rampachodavaram|Repalle|Sathupalli|Sattenapalle|Siddipet|Sompeta|Srikakulam|Tanuku|Tekkali|Tuni|Uravakonda|Vijayawada|Vinukonda|Visakhapatnam|Vizianagaram|Warangal|Yellandu";
s_a[3]="Along|Khonsa|Tawang|Tezu";
s_a[4]="Barpeta Road|Bijni|Bongaigaon|Dibrugarh|Digboi|Diphu|Gohpur|Guwahati|Kokrajhar|Maibong|Morigaon|Silchar|Tezpur|Tinsukia|Udalguri";
s_a[5]="Amarpur|Arrah|Aurangabad|Bagaha|Banmankhi|Begusarai|Bettiah|Bhabhua|Bikramganj|Buxar|Darbhanga|Daudnagar|Dumraon|Forbesganj|Gaya|Hilsa|Jamshedpur|Katihar|Khagaria|Kishanganj|Madhubani|Mairwa|Monghyr|Muzaffarpur|Patna|Piro|Pupri|Purnia|Rafiganj|Raxaul|Saharsa|Sheikhpura|Sheohar|Sonepur|Supaul";
s_a[6]="Chandigarh";
s_a[7]="Arang|Baikunthpur|Balod|Bhilai|Bijapur|Bilaspur|Dhamtari|Dongargarh|Durg|Gharghoda|Jagdalpur|Jashpurnagar|Kawardha|Kondagaon|Korba|Kota|Kurud|Lormi|Mungeli|Pandaria|Pathalgaon|Pendra|Raigarh|Raipur|Rajpur|Saraipali|Udaipur";
s_a[8]="Chikhli|Silvassa";
s_a[9]="Daman|Diu|Nagwa";
s_a[10]="New Delhi";
s_a[11]="Canacona|Candolim|Chinchinim|Cortalim|Goa|Jua|Madgaon|Ponda|Sanvordem";
s_a[12]="Ahmedabad|Ahwa|Amod|Amreli|Anand|Bhavnagar|Bhuj|Borsad|Chotila|Dabhoi|Dhandhuka|Dhanera|Dharampur|Dholka|Dhrol|Gadhada|Gariadhar|Godhra|Gondal|Halvad|Himatnagar|Jambusar|Jamnagar|Jasdan|Jetpur|Keshod|Kheda|Khedbrahma|Lakhtar|Limbdi|Mundra|Okha|Paddhari|Padra|Porbandar|Sankheda|Sihor|Surendranagar|Upleta|Vadodara|Vapi|Visnagar";
s_a[13]="Ellenabad|Faridabad|Gharaunda|Gurgaon|Hisar|Jhajjar|Kaithal|Kalanaur|Mahendragarh|Palwal|Pehowa|Ratia|Rohtak|Safidon|Sirsa";
s_a[14]="Arki|Bilaspur|Chamba|Dalhousie|Mandi|Rohru|Shimla|Sirmaur|Solan|Theog|Udaipur|Una";
s_a[15]="Anantnag|Doda|Jammu|Kargil|Kathua|Kulgam|Leh|Nagrota|Pulwama|Srinagar|Udhampur";
s_a[16]="Barhi|Bhandaria|Daltonganj|Deoghar|Dumka|Garhwa|Godda|Jamshedpur|Khunti|Madhupur|Manoharpur|Muri|Pakur|Ranchi|Saraikela|Simaria|Simdega";
s_a[17]="Afzalpur|Aland|Anekal|Ankola|Arsikere|Bagalkot|Belgaum|Bellary|Bengaluru|Bhatkal|Bijapur|Challakere|Chamrajnagar|Channagiri|Channapatna|Chincholi|Chitradurga|Dharwad|Gadag|Gokak|Gubbi|Gulbarga|Haliyal|Hampi|Hassan|Holalkere|Hosakote|Hosanagara|Hospet|Hubli|Hungund|Indi|Jamkhandi|Karwar|Koppa|Koppal|Kumta|Kundgol|Kunigal|Madikeri|Malavalli|Mandya|Mangalore|Mudhol|Mundargi|Mysore|Nargund|Navalgund|Nelamangala|Ron|Sakleshpur|Saundatti|Shimoga|Sidlaghatta|Sirsi|Siruguppa|Sorab|Sringeri|Tarikere|Turuvekere|Udupi";
s_a[18]="Alappuzha|Alwaye|Attingal|Badagara|Idukki|Kannur|Kollam|Kottayam|Kovalam|Kozhikode|Kunnamkulam|Malappuram|Manjeri|Munnar|Muvattupuzha|Perumbavoor|Shertallai|Tellicherry|Thiruvananthapuram|Thrissur|Tirur|Tiruvalla";
s_a[19]="";
s_a[20]="Agar|Ajaigarh|Ashoknagar|Ashta|Baihar|Baldeogarh|Banda|Begamganj|Berasia|Bhainsdehi|Bhikangaon|Bhind|Bhopal|Biaora|Chanderi|Chhatarpur|Chicholi|Dabra|Damoh|Datia|Deori|Dewas|Dharampuri|Dindori|Guna|Gwalior|Harrai|Hatta|Indore|Jabalpur|Jagdalpur|Jaisinghnagar|Jobat|Jora|Kannod|Kareli|Karera|Karhal|Katangi|Khandwa|Khargone|Khetia|Khilchipur|Khurai|Kotma|Kukshi|Maheshwar|Maihar|Majholi|Mandsaur|Mauganj|Morena|Multai|Mungaoli|Nainpur|Narwar|Pachmarhi|Panna|Patharia|Pawai|Raghunathpur|Raisen|Rajpur|Rehli|Rewa|Sabalgarh|Satna|Sehore|Sendhwa|Seondha|Seoni|Shahdol|Sheopur|Shivpuri|Sidhi|Singrauli|Sironj|Susner|Teonthar|Thandla|Udaipura|Ujjain|Umaria|Vidisha";
s_a[21]="Achalpur|Akola|Akot|Amalner|Ambad|Ashti|Aurangabad|Ausa|Bhiwandi|Bhor|Chopda|Daund|Deori|Digras|Dindori|Gadhinglaj|Gevrai|Goregaon|Hingoli|Igatpuri|Jalgaon|Jamkhandi|Junnar|Kalamb|Kalmeshwar|Kannad|Karjat|Khed|Khopoli|Kinwat|Kopargaon|Koregaon|Latur|Mumbai|Murud|Nagpur|Nandgaon|Nandurbar|Nashik|Nilanga|Osmanabad|Paithan|Pandharpur|Parbhani|Parola|Pen|Phaltan|Pune|Pusad|Ratnagiri|Risod|Roha|Sangamner|Sanguem|Saoner|Satara|Shirpur|Shirwal|Sillod|Sinnar|Taloda|Trimbak|Tumsar|Umarkhed|Vengurla|Wai|Wani|Wardha|Warora|Yeola";
s_a[22]="Bishnupur|Imphal|Kakching";
s_a[23]="Nongpoh|Nongstoin|Shillong|Tura";
s_a[24]="Aizawl|Kolasib|Lunglei|Mamit|Saiha";
s_a[25]="Kohima|Mon|Phek|Tuensang|Wokha|Zunheboto";
s_a[26]="Angul|Balasore|Barbil|Bargarh|Barkot|Bhanjanagar|Buguda|Cuttack|Deogarh|Digapahandi|Gunupur|Jagatsinghapur|Jharsuguda|Kashipur|Khordha|Khurda|Kuchinda|Padampur|Puri|Sambalpur|Soro";
s_a[27]="Yanam";
s_a[28]="Abohar|Amritsar|Bathinda|Chandigarh|Jagraon|Jalandhar|Kharar|Kotkapura|Malaut|Moga|Nakodar|Nangal|Nawanshahr|Patti|Phillaur|Ropar|Sardulgarh|Zira";
s_a[29]="Ajmer|Aklera|Alwar|Amber|Amet|Baswa|Behror|Bharatpur|Chhabra|Dausa|Deogarh|Deoli|Desuri|Dungarpur|Fatehpur|Hindaun|Jaipur|Jaisalmer|Jodhpur|Karauli|Kekri|Khetri|Kishanganj|Kishangarh|Kota|Kotputli|Kotra|Kotri|Malpura|Merta|Nainwa|Neem ka Thana|Nohar|Nokha|Padampur|Phalodi|Pokaran|Raipur|Ratangarh|Sangod|Sheoganj|Shergarh|Sirohi|Sojat|Todaraisingh|Tonk|Udaipur";
s_a[30]="Gangtok|Mangan|Namchi|Singtam";
s_a[31]="Ambasamudram|Arni|Attur|Chengam|Chennai|Chidambaram|Chingleput|Coimbatore|Cuddalore|Cumbum|Devakottai|Dharmapuri|Dindigul|Erode|Gingee|Gobichettipalayam|Gudalur|Gudiyatham|Kanchipuram|Kangayam|Karur|Kodumudi|Kotagiri|Kovilpatti|Krishnagiri|Kumbakonam|Kuzhithurai|Madurai|Manamadurai|Mannargudi|Mayiladuthurai|Mettupalayam|Musiri|Nanguneri|Ooty|Palani|Papanasam|Perambalur|Perundurai|Pollachi|Ponneri|Pudukkottai|Ramanathapuram|Rasipuram|Salem|Sivaganga|Sivakasi|Tindivanam|Tiruchengode|Tiruchirappalli|Tiruvallur|Trichy|Vaniyambadi|Vellore|Velur|Villupuram";
s_a[32]="Agartala|Belonia|Khowai|Tripura";
s_a[33]="Achhnera|Agra|Akbarpur|Amethi|Amroha|Auraiya|Azamgarh|Baberu|Baheri|Banda|Bareilly|Bhadohi|Bharthana|Bilhaur|Bindki|Bisauli|Budaun|Bulandshahr|Chakia|Chandauli|Chirgaon|Dalmau|Deoband|Deoria|Etah|Fatehpur|Gorakhpur|Gunnaur|Hasanpur|Jalesar|Jaunpur|Kaimganj|Kannauj|Kanpur|Karhal|Khair|Kheri|Konch|Kunda|Lalitpur|Lucknow|Mainpuri|Mathura|Mau|Maudaha|Meerut|Misrikh|Muzaffarnagar|Naraini|Noida|Orai|Padrauna|Patti|Phulpur|Robertsganj|Saidpur|Salon|Sambhal|Sardhana|Sikandra Rao|Sultanpur|Tilhar|Utraula|Varanasi";
s_a[34]="Almora|Champawat|Haldwani|Haridwar|Kashipur|Kichha|Mussoorie|Pantnagar|Roorkee";
s_a[35]="Adra|Birpara|Bolpur|Canning|Contai|Durgapur|Haldia|Kharagpur|Kolkata|Krishnanagar|Rampur Hat|Siliguri";

// Add print_state and print_city functions below

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}