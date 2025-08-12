export interface CityData {
  name: string
  state: string
  postalCode: string
}

export const pakistanCitiesData: CityData[] = [
  // Punjab
  { name: "Lahore", state: "Punjab", postalCode: "54000" },
  { name: "Faisalabad", state: "Punjab", postalCode: "38000" },
  { name: "Rawalpindi", state: "Punjab", postalCode: "46000" },
  { name: "Gujranwala", state: "Punjab", postalCode: "52250" },
  { name: "Multan", state: "Punjab", postalCode: "60000" },
  { name: "Bahawalpur", state: "Punjab", postalCode: "63100" },
  { name: "Sargodha", state: "Punjab", postalCode: "40100" },
  { name: "Sialkot", state: "Punjab", postalCode: "51310" },
  { name: "Sheikhupura", state: "Punjab", postalCode: "39350" },
  { name: "Rahim Yar Khan", state: "Punjab", postalCode: "64200" },
  { name: "Jhang", state: "Punjab", postalCode: "35200" },
  { name: "Gujrat", state: "Punjab", postalCode: "50700" },
  { name: "Kasur", state: "Punjab", postalCode: "55050" },
  { name: "Sahiwal", state: "Punjab", postalCode: "57000" },
  { name: "Okara", state: "Punjab", postalCode: "56300" },
  { name: "Chiniot", state: "Punjab", postalCode: "35400" },
  { name: "Kamoke", state: "Punjab", postalCode: "39300" },
  { name: "Mandi Bahauddin", state: "Punjab", postalCode: "50400" },
  { name: "Jhelum", state: "Punjab", postalCode: "49600" },
  { name: "Sadiqabad", state: "Punjab", postalCode: "64350" },
  { name: "Khanewal", state: "Punjab", postalCode: "58150" },
  { name: "Hafizabad", state: "Punjab", postalCode: "52110" },
  { name: "Muzaffargarh", state: "Punjab", postalCode: "34200" },
  { name: "Khanpur", state: "Punjab", postalCode: "64400" },
  { name: "Gojra", state: "Punjab", postalCode: "35250" },
  { name: "Bahawalnagar", state: "Punjab", postalCode: "62300" },
  { name: "Muridke", state: "Punjab", postalCode: "39020" },
  { name: "Pak Pattan", state: "Punjab", postalCode: "57400" },
  { name: "Jaranwala", state: "Punjab", postalCode: "37200" },
  { name: "Chishtian", state: "Punjab", postalCode: "62350" },
  { name: "Daska", state: "Punjab", postalCode: "51010" },
  { name: "Mianwali", state: "Punjab", postalCode: "42200" },
  { name: "Attock", state: "Punjab", postalCode: "43600" },
  { name: "Vehari", state: "Punjab", postalCode: "61100" },
  { name: "Wah Cantonment", state: "Punjab", postalCode: "47040" },
  { name: "Taxila", state: "Punjab", postalCode: "47080" },

  // Sindh
  { name: "Karachi", state: "Sindh", postalCode: "74000" },
  { name: "Hyderabad", state: "Sindh", postalCode: "71000" },
  { name: "Sukkur", state: "Sindh", postalCode: "65200" },
  { name: "Larkana", state: "Sindh", postalCode: "77150" },
  { name: "Nawabshah", state: "Sindh", postalCode: "67450" },
  { name: "Mirpur Khas", state: "Sindh", postalCode: "69000" },
  { name: "Jacobabad", state: "Sindh", postalCode: "79000" },
  { name: "Shikarpur", state: "Sindh", postalCode: "78100" },
  { name: "Khairpur", state: "Sindh", postalCode: "66020" },
  { name: "Dadu", state: "Sindh", postalCode: "76150" },
  { name: "Kotri", state: "Sindh", postalCode: "76090" },
  { name: "Tando Adam", state: "Sindh", postalCode: "70160" },
  { name: "Turbat", state: "Sindh", postalCode: "92600" },

  // Khyber Pakhtunkhwa
  { name: "Peshawar", state: "Khyber Pakhtunkhwa", postalCode: "25000" },
  { name: "Mardan", state: "Khyber Pakhtunkhwa", postalCode: "23200" },
  { name: "Mingora", state: "Khyber Pakhtunkhwa", postalCode: "19130" },
  { name: "Kohat", state: "Khyber Pakhtunkhwa", postalCode: "26000" },
  { name: "Bannu", state: "Khyber Pakhtunkhwa", postalCode: "28100" },
  { name: "Dera Ismail Khan", state: "Khyber Pakhtunkhwa", postalCode: "29050" },
  { name: "Nowshera", state: "Khyber Pakhtunkhwa", postalCode: "24110" },
  { name: "Swabi", state: "Khyber Pakhtunkhwa", postalCode: "23430" },
  { name: "Charsadda", state: "Khyber Pakhtunkhwa", postalCode: "24420" },
  { name: "Hangu", state: "Khyber Pakhtunkhwa", postalCode: "26500" },
  { name: "Karak", state: "Khyber Pakhtunkhwa", postalCode: "27200" },
  { name: "Lakki Marwat", state: "Khyber Pakhtunkhwa", postalCode: "28420" },
  { name: "Mansehra", state: "Khyber Pakhtunkhwa", postalCode: "21300" },
  { name: "Haripur", state: "Khyber Pakhtunkhwa", postalCode: "22620" },
  { name: "Abottabad", state: "Khyber Pakhtunkhwa", postalCode: "22010" },

  // Balochistan
  { name: "Quetta", state: "Balochistan", postalCode: "87300" },
  { name: "Zhob", state: "Balochistan", postalCode: "85200" },
  { name: "Chaman", state: "Balochistan", postalCode: "86500" },

  // Gilgit-Baltistan
  { name: "Gilgit", state: "Gilgit-Baltistan", postalCode: "15100" },
  { name: "Skardu", state: "Gilgit-Baltistan", postalCode: "16100" },

  // Azad Jammu and Kashmir
  { name: "Muzaffarabad", state: "Azad Jammu and Kashmir", postalCode: "13100" },
  { name: "Mirpur", state: "Azad Jammu and Kashmir", postalCode: "10250" },
  { name: "Rawalakot", state: "Azad Jammu and Kashmir", postalCode: "12300" },
  { name: "Kotli", state: "Azad Jammu and Kashmir", postalCode: "11100" },
  { name: "Bhimber", state: "Azad Jammu and Kashmir", postalCode: "10040" },
  { name: "Bagh", state: "Azad Jammu and Kashmir", postalCode: "12500" },

  // Islamabad Capital Territory
  { name: "Islamabad", state: "Islamabad Capital Territory", postalCode: "44000" },
].sort((a, b) => a.name.localeCompare(b.name))
