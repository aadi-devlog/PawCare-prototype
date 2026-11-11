// All entries below are illustrative demo records, not real or verified providers.
    const listings = [
      {id:1,name:"Sunbeam Veterinary Clinic",type:"vet",typeLabel:"Veterinary clinic",area:"Central district, Dehradun",city:"Dehradun",state:"Uttarakhand",country:"India",animals:["dogs","cats"],services:["General consultation","Vaccination","Preventive care"],image:"assets/cat-companion.jpg",imageAlt:"Illustrative tabby cat companion photo",description:"A sample neighbourhood clinic profile for routine check-ups, vaccinations and everyday pet-health guidance."},
      {id:2,name:"Northside Animal Hospital",type:"hospital",typeLabel:"Animal hospital",area:"North district, Dehradun",city:"Dehradun",state:"Uttarakhand",country:"India",animals:["cats","dogs","rabbits","birds","small mammals"],services:["Urgent care","Surgery consultation","Observation"],image:"assets/rabbit-companion.jpg",imageAlt:"Illustrative rabbit companion photo",description:"An illustrative hospital profile showing how advanced-care and urgent-support information could be presented."},
      {id:3,name:"Little Paws Stay & Play",type:"boarding",typeLabel:"Pet boarding",area:"Riverside area, Dehradun",city:"Dehradun",state:"Uttarakhand",country:"India",animals:["dogs","cats","rabbits","small pets"],services:["Day care","Overnight boarding","Supervised play"],image:"assets/dog-cat-companions.jpg",imageAlt:"Illustrative dog and cat companion photo",description:"A sample boarding profile for families looking for a supervised place for their pets while they are away."},
      {id:4,name:"ClearPath Pet Diagnostics",type:"diagnostics",typeLabel:"Diagnostics",area:"West district, Dehradun",city:"Dehradun",state:"Uttarakhand",country:"India",animals:["birds","cats","dogs","small mammals"],services:["Blood tests","Imaging referral","Sample collection"],image:"assets/bird-companion.jpg",imageAlt:"Illustrative budgerigar companion photo",description:"An illustrative diagnostic-services listing with examples of tests and support that may be offered."},
      {id:5,name:"KindRoute Animal Transport",type:"ambulance",typeLabel:"Animal ambulance",area:"City-wide service, Dehradun",city:"Dehradun",state:"Uttarakhand",country:"India",animals:["dogs","cats","rabbits","small pets"],services:["Pet transport","Clinic transfers","Rescue transport"],image:"assets/guinea-pig-companion.jpg",imageAlt:"Illustrative guinea pig companion photo",description:"A sample transport listing. A real directory should verify coverage areas, operating hours and emergency contact details."},
      {id:6,name:"Second Chance Animal Collective",type:"ngo",typeLabel:"NGO / shelter",area:"South district, Dehradun",city:"Dehradun",state:"Uttarakhand",country:"India",animals:["dogs","cats","birds","rabbits","small mammals"],services:["Rescue support","Adoption guidance","Foster network"],image:"assets/hero-multi-animal.jpg",imageAlt:"Illustrative group of dogs, cats, rabbits, guinea pigs and a bird",description:"A sample animal-welfare organisation profile showing rescue, adoption and community-support information."}
    ];

    const grid = document.getElementById('providerGrid');
    const empty = document.getElementById('emptyState');
    const toast = document.getElementById('toast');
    const modalBackdropIds = ['detailModal', 'businessModal', 'correctionModal'];
    let activeCategory = 'all';
    let activeKeyword = '';
    let activeLocation = '';
    // Curated Indian state/UT to city directory for the prototype location picker.
    // A live product can replace this local catalog with a geocoding/place database.
    const locationOptions = {
      'Andhra Pradesh':['Visakhapatnam','Vijayawada','Guntur','Nellore','Kurnool','Tirupati','Rajahmundry','Kakinada','Anantapur','Kadapa'],
      'Arunachal Pradesh':['Itanagar','Naharlagun','Pasighat','Tawang','Ziro'],
      'Assam':['Guwahati','Dibrugarh','Silchar','Jorhat','Tezpur','Nagaon','Tinsukia'],
      'Bihar':['Patna','Gaya','Muzaffarpur','Bhagalpur','Darbhanga','Purnia','Bihar Sharif','Ara'],
      'Chhattisgarh':['Raipur','Bilaspur','Durg','Bhilai','Korba','Jagdalpur','Raigarh'],
      'Goa':['Panaji','Margao','Vasco da Gama','Mapusa','Ponda'],
      'Gujarat':['Ahmedabad','Surat','Vadodara','Rajkot','Bhavnagar','Jamnagar','Junagadh','Gandhinagar','Anand','Navsari'],
      'Haryana':['Gurugram','Faridabad','Panipat','Ambala','Hisar','Rohtak','Karnal','Sonipat','Yamunanagar'],
      'Himachal Pradesh':['Shimla','Dharamshala','Solan','Mandi','Kullu','Manali','Hamirpur','Una'],
      'Jharkhand':['Ranchi','Jamshedpur','Dhanbad','Bokaro','Deoghar','Hazaribagh'],
      'Karnataka':['Bengaluru','Mysuru','Mangaluru','Hubballi','Dharwad','Belagavi','Kalaburagi','Davangere','Shivamogga','Tumakuru','Udupi'],
      'Kerala':['Thiruvananthapuram','Kochi','Kozhikode','Thrissur','Kollam','Kannur','Alappuzha','Palakkad','Kottayam'],
      'Madhya Pradesh':['Bhopal','Indore','Gwalior','Jabalpur','Ujjain','Sagar','Dewas','Satna','Ratlam','Rewa'],
      'Maharashtra':['Mumbai','Pune','Nagpur','Nashik','Thane','Navi Mumbai','Kolhapur','Solapur','Amravati','Akola','Latur'],
      'Manipur':['Imphal','Thoubal','Churachandpur','Kakching'],
      'Meghalaya':['Shillong','Tura','Jowai','Nongstoin'],
      'Mizoram':['Aizawl','Lunglei','Champhai','Serchhip'],
      'Nagaland':['Kohima','Dimapur','Mokokchung','Tuensang'],
      'Odisha':['Bhubaneswar','Cuttack','Rourkela','Berhampur','Sambalpur','Puri','Balasore','Angul'],
      'Punjab':['Ludhiana','Amritsar','Jalandhar','Patiala','Bathinda','Pathankot','Mohali','Hoshiarpur','Moga'],
      'Rajasthan':['Jaipur','Jodhpur','Udaipur','Kota','Ajmer','Bikaner','Alwar','Bharatpur','Sikar','Bhilwara'],
      'Sikkim':['Gangtok','Namchi','Gyalshing','Mangan'],
      'Tamil Nadu':['Chennai','Coimbatore','Madurai','Tiruchirappalli','Salem','Tirunelveli','Erode','Vellore','Thanjavur','Dindigul','Thoothukudi'],
      'Telangana':['Hyderabad','Warangal','Nizamabad','Karimnagar','Khammam','Mahbubnagar','Nalgonda'],
      'Tripura':['Agartala','Dharmanagar','Kailashahar','Udaipur (Tripura)'],
      'Uttar Pradesh':['Lucknow','Gorakhpur','Noida','Ghaziabad','Varanasi','Kanpur','Agra','Prayagraj','Meerut','Bareilly','Moradabad','Aligarh','Jhansi','Mathura','Ayodhya','Saharanpur','Firozabad','Muzaffarnagar'],
      'Uttarakhand':['Dehradun','Haridwar','Rishikesh','Kotdwar','Haldwani','Roorkee','Rudrapur','Kashipur','Nainital','Almora','Pithoragarh'],
      'West Bengal':['Kolkata','Siliguri','Howrah','Durgapur','Asansol','Bardhaman','Kharagpur','Haldia','Darjeeling'],
      'Andaman and Nicobar Islands':['Port Blair','Diglipur'],
      'Chandigarh':['Chandigarh'],
      'Dadra and Nagar Haveli and Daman and Diu':['Daman','Silvassa','Diu'],
      'Delhi':['New Delhi','Delhi'],
      'Jammu and Kashmir':['Srinagar','Jammu','Anantnag','Baramulla','Udhampur'],
      'Ladakh':['Leh','Kargil'],
      'Lakshadweep':['Kavaratti','Agatti'],
      'Puducherry':['Puducherry','Karaikal','Mahe','Yanam']
    };
    const cityAliases = {
      'bangalore':'Bengaluru','bengaluru':'Bengaluru',
      'bombay':'Mumbai','mumbai':'Mumbai',
      'calcutta':'Kolkata','kolkata':'Kolkata',
      'madras':'Chennai','chennai':'Chennai',
      'gurgaon':'Gurugram','gurugram':'Gurugram',
      'poona':'Pune','pune':'Pune',
      'mysore':'Mysuru','mysuru':'Mysuru',
      'mangalore':'Mangaluru','mangaluru':'Mangaluru',
      'cochin':'Kochi','kochi':'Kochi',
      'trivandrum':'Thiruvananthapuram','thiruvananthapuram':'Thiruvananthapuram',
      'baroda':'Vadodara','vadodara':'Vadodara',
      'allahabad':'Prayagraj','prayagraj':'Prayagraj',
      'banaras':'Varanasi','kashi':'Varanasi','varanasi':'Varanasi',
      'vizag':'Visakhapatnam','visakhapatnam':'Visakhapatnam',
      'new delhi':'New Delhi','delhi':'Delhi',
      'pondicherry':'Puducherry','puducherry':'Puducherry'
    };
    let toastTimer;
    let lastFocusedElement = null;
    let activeModal = null;

    const categoryNames = {
      vet:'Veterinary clinics', hospital:'Animal hospitals', boarding:'Pet boarding',
      diagnostics:'Diagnostics', ambulance:'Animal ambulance', ngo:'NGOs & shelters'
    };

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
    }

    // Normalize common search variations so "vet", "vets" and "veterinary" meet.
    function normalizeSearchText(value) {
      return String(value || '')
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\b(veterinarians?|veterinary|vets?)\b/g, 'vet')
        .replace(/\b(doctors?|dr)\b/g, 'vet')
        .replace(/\b(clinics?)\b/g, 'clinic')
        .replace(/\b(hospitals?)\b/g, 'hospital')
        .replace(/\b(dogs?)\b/g, 'dog')
        .replace(/\b(cats?)\b/g, 'cat')
        .replace(/\b(kennels?)\b/g, 'boarding')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function tokens(value) {
      const stopWords = new Set(['in','near','nearby','me','for','the','a','an','and','of','at','to','with','by','looking']);
      return normalizeSearchText(value).split(' ').filter(word => word && !stopWords.has(word));
    }

    function matchesTerms(fields, query) {
      const terms = tokens(query);
      if (!terms.length) return true;
      const haystack = ` ${normalizeSearchText(fields.join(' '))} `;
      return terms.every(term => haystack.includes(` ${term}`));
    }

    function splitCombinedSearch(value) {
      const raw = String(value || '').trim();
      if (!raw) return { keyword: '', location: '' };
      const explicitLocation = raw.match(/^(.*?)\s+(?:near|in|at|around)\s+(.+)$/i);
      if (explicitLocation) {
        const typedLocation = explicitLocation[2].trim();
        const cityEntry = getCityEntry(typedLocation);
        return { keyword: explicitLocation[1].trim(), location: cityEntry ? `${cityEntry.city} ${cityEntry.state}` : typedLocation };
      }
      // Recognize any city in the local location catalog, not only cities with demo listings.
      const cities = allCityEntries().map(entry => entry.city).sort((a, b) => b.length - a.length);
      const normalizedRaw = normalizeSearchText(raw);
      const matchedCity = cities.find(city => normalizedRaw.endsWith(` ${normalizeSearchText(city)}`) || normalizedRaw === normalizeSearchText(city));
      if (matchedCity) {
        const keyword = raw.slice(0, raw.toLowerCase().lastIndexOf(matchedCity.toLowerCase())).trim();
        const cityEntry = getCityEntry(matchedCity);
        return { keyword, location: cityEntry ? `${cityEntry.city} ${cityEntry.state}` : matchedCity };
      }
      for (const [alias, entry] of normalizedCityAliases) {
        if (normalizedRaw.endsWith(` ${alias}`) || normalizedRaw === alias) {
          const keyword = raw.slice(0, raw.toLowerCase().lastIndexOf(alias)).trim();
          return { keyword, location: `${entry.city} ${entry.state}` };
        }
      }
      return { keyword: raw, location: '' };
    }

    function getFilteredListings() {
      return listings.filter(item => {
        const categoryMatch = activeCategory === 'all' || activeCategory === item.type;
        const keywordMatch = matchesTerms(
          [item.name, item.typeLabel, item.services.join(' '), item.animals.join(' '), item.description],
          activeKeyword
        );
        const locationMatch = matchesTerms([item.area, item.city, item.state, item.country], activeLocation);
        return categoryMatch && keywordMatch && locationMatch;
      });
    }

    function bindImageFallbacks(root = document) {
      root.querySelectorAll('img[data-fallback]').forEach(img => {
        const fail = () => {
          img.hidden = true;
          img.parentElement.classList.add('image-fallback');
        };
        img.addEventListener('error', fail, { once: true });
        if (img.complete && img.naturalWidth === 0) fail();
      });
    }

    function syncCategoryButtons() {
      document.querySelectorAll('.category-card').forEach(card => {
        const selected = card.dataset.category === activeCategory;
        card.classList.toggle('active', selected);
        card.setAttribute('aria-pressed', String(selected));
      });
    }

    function updateSearchSummary(filtered) {
      const resultCount = document.getElementById('resultCount');
      const heading = document.getElementById('resultHeading');
      const hasSearch = Boolean(activeKeyword.trim() || activeLocation.trim());
      heading.textContent = activeCategory !== 'all'
        ? categoryNames[activeCategory]
        : (hasSearch ? 'Search results' : 'Explore care');
      resultCount.textContent = `Showing ${filtered.length} of ${listings.length} demo listings`;
      empty.style.display = filtered.length ? 'none' : 'block';
      grid.style.display = filtered.length ? 'grid' : 'none';
    }

    const providerArt = { vet: '🩺', hospital: '🏥', boarding: '🏡', diagnostics: '🔬', ambulance: '🚑', ngo: '🐾' };

    function renderListings() {
      const filtered = getFilteredListings();
      grid.innerHTML = filtered.map(item => `
        <article class="provider-card">
          <div class="provider-image">
            <img data-fallback src="${item.image}" alt="${item.imageAlt}" loading="eager">
            <span class="provider-art" aria-hidden="true"><span>${providerArt[item.type] || '🐾'}</span></span>
            <span class="demo-tag">Sample listing</span>
          </div>
          <div class="provider-image-caption">Illustrative animal image, not a photograph of this provider.</div>
          <div class="provider-body">
            <div class="provider-type">${item.typeLabel}</div>
            <h3>${item.name}</h3>
            <div class="provider-meta">
              <span aria-label="Service area">⌖ ${item.area}</span>
            </div>
            <div class="provider-animals"><strong>Animals:</strong> ${item.animals.map(animal => animal[0].toUpperCase()+animal.slice(1)).join(', ')}</div>
            <div class="provider-tags">${item.services.slice(0,3).map(service => `<span class="tag">${service}</span>`).join('')}</div>
            <div class="provider-trust"><strong>Demo listing:</strong> Provider identity and details are not verified.</div>
            <div class="provider-actions">
              <button class="btn btn-primary" type="button" data-details="${item.id}">View provider details</button>
            </div>
          </div>
        </article>`).join('');
      bindImageFallbacks(grid);
      updateSearchSummary(filtered);
    }

    function clearSearchResults() {
      activeKeyword = '';
      activeLocation = '';
      activeCategory = 'all';
      document.getElementById('heroQuery').value = '';
      document.getElementById('heroState').value = '';
      document.getElementById('heroCity').value = '';
      cityHelp.textContent = 'Choose a state to narrow the city list, or type a city to fill its state automatically.';
      closeCityOptions();
      document.getElementById('resultSearchInput').value = '';
      syncCategoryButtons();
      renderListings();
      document.getElementById('resultSearchInput').focus();
    }

    function getFocusableElements(container) {
      return [...container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .filter(element => !element.hidden && element.getAttribute('aria-hidden') !== 'true' && element.getClientRects().length > 0);
    }

    function setPageInert(isInert) {
      ['.site-header', 'main', '.footer'].forEach(selector => {
        const node = document.querySelector(selector);
        if (node) node.inert = isInert;
      });
    }

    function openModal(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      // Close any other dialog first, then remember where focus should return.
      modalBackdropIds.forEach(otherId => {
        const other = document.getElementById(otherId);
        if (other && other !== modal) other.classList.remove('open');
      });
      lastFocusedElement = document.activeElement;
      activeModal = modal;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      setPageInert(true);
      requestAnimationFrame(() => {
        const preferred = modal.querySelector('[data-close]') || getFocusableElements(modal)[0];
        if (preferred) preferred.focus();
      });
    }

    function closeModal(modal) {
      if (!modal || !modal.classList.contains('open')) return;
      modal.classList.remove('open');
      if (!document.querySelector('.modal-backdrop.open')) {
        document.body.style.overflow = '';
        setPageInert(false);
        activeModal = null;
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        }
      }
    }

    function showDetails(id) {
      const item = listings.find(entry => entry.id === Number(id));
      if (!item) return;
      document.getElementById('detailTitle').textContent = item.name;
      document.getElementById('detailContent').innerHTML = `
        <div class="detail-hero">
          <div class="detail-image"><img data-fallback src="${item.image}" alt="${item.imageAlt}"></div>
          <div><div class="provider-type">${item.typeLabel}</div><h3>${item.name}</h3><p>${item.area}</p></div>
        </div>
        <p class="provider-detail-description">${item.description}</p>
        <div class="detail-list">
          <div class="detail-row"><b>Services</b><span>${item.services.join(', ')}</span></div>
          <div class="detail-row"><b>Animals</b><span>${item.animals.map(animal => animal[0].toUpperCase()+animal.slice(1)).join(', ')}</span></div>
          <div class="detail-row"><b>Service area</b><span>${item.area}</span></div>
          <div class="detail-row"><b>Opening hours</b><span>Not supplied in this demo</span></div>
          <div class="detail-row"><b>Phone / email</b><span>Not connected in this demo</span></div>
          <div class="detail-row"><b>Ratings</b><span>Not displayed because this is sample data</span></div>
        </div>
        <div class="detail-note"><strong>Transparency note:</strong> This is an illustrative sample listing, not a real or verified provider. The animal photograph is illustrative and does not show this provider or its facility. Contact details, opening hours, ratings and professional credentials must be checked before a live directory publishes them.</div>
        <p class="contact-unavailable-note">Contact details are not available in this illustrative prototype. A live directory would show verified contact options here.</p>`;
      bindImageFallbacks(document.getElementById('detailContent'));
      openModal('detailModal');
    }

    const stateSelect = document.getElementById('heroState');
    const cityInput = document.getElementById('heroCity');
    const cityOptionsList = document.getElementById('cityOptions');
    const cityDropdownToggle = document.getElementById('cityDropdownToggle');
    const cityHelp = document.getElementById('cityHelp');
    const cityToState = new Map();
    const normalizedCityAliases = new Map();
    Object.entries(locationOptions).forEach(([state, cities]) => {
      cities.forEach(city => cityToState.set(normalizeSearchText(city), { city, state }));
    });
    Object.entries(cityAliases).forEach(([alias, canonical]) => {
      const entry = cityToState.get(normalizeSearchText(canonical));
      if (entry) normalizedCityAliases.set(normalizeSearchText(alias), entry);
    });

    Object.keys(locationOptions).sort().forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });

    function allCityEntries() {
      return [...cityToState.values()].sort((a, b) => a.city.localeCompare(b.city));
    }

    function getCityEntry(value) {
      const key = normalizeSearchText(value);
      return cityToState.get(key) || normalizedCityAliases.get(key) || null;
    }

    function closeCityOptions() {
      cityOptionsList.hidden = true;
      cityInput.setAttribute('aria-expanded', 'false');
      cityDropdownToggle.setAttribute('aria-expanded', 'false');
      cityDropdownToggle.setAttribute('aria-label', 'Show city options');
      cityInput.removeAttribute('aria-activedescendant');
      activeCityOption = -1;
    }

    let activeCityOption = -1;
    function renderCityOptions(query = '') {
      const state = stateSelect.value;
      const source = state
        ? (locationOptions[state] || []).map(city => ({ city, state }))
        : allCityEntries();
      const normalizedQuery = normalizeSearchText(query);
      const matches = source.filter(entry => !normalizedQuery || normalizeSearchText(entry.city).includes(normalizedQuery));
      const shown = matches.slice(0, 80);
      cityOptionsList.replaceChildren();
      cityInput.removeAttribute('aria-activedescendant');
      if (!shown.length) {
        const emptyOption = document.createElement('div');
        emptyOption.className = 'city-empty';
        emptyOption.textContent = state ? 'No matching city in this state.' : 'No matching city in the city list. Select a state manually.';
        cityOptionsList.appendChild(emptyOption);
      } else {
        shown.forEach((entry, index) => {
          const option = document.createElement('button');
          option.type = 'button';
          option.className = 'city-option';
          option.id = `city-option-${index}`;
          option.setAttribute('role', 'option');
          option.setAttribute('aria-selected', String(normalizeSearchText(cityInput.value) === normalizeSearchText(entry.city)));
          option.dataset.city = entry.city;
          option.dataset.state = entry.state;
          const name = document.createElement('span');
          name.textContent = entry.city;
          const stateName = document.createElement('small');
          stateName.textContent = entry.state;
          option.append(name, stateName);
          cityOptionsList.appendChild(option);
        });
      }
      cityOptionsList.hidden = false;
      cityInput.setAttribute('aria-expanded', 'true');
      cityDropdownToggle.setAttribute('aria-expanded', 'true');
      cityDropdownToggle.setAttribute('aria-label', 'Hide city options');
      activeCityOption = -1;
    }

    function chooseCity(city, state) {
      cityInput.value = city;
      stateSelect.value = state;
      cityHelp.textContent = `${state} selected automatically for ${city}.`;
      closeCityOptions();
    }

    function resolveCityAndState(value, { updateCity = false, showFeedback = true } = {}) {
      const match = getCityEntry(value);
      if (!match) {
        if (showFeedback && value.trim()) {
          cityHelp.textContent = stateSelect.value
            ? `No exact match found. You can keep “${value.trim()}” with ${stateSelect.value}, or choose a listed city.`
            : 'City not recognized yet. Select its state manually or choose a city from the list.';
        }
        return false;
      }
      stateSelect.value = match.state;
      if (updateCity || normalizeSearchText(value) !== normalizeSearchText(match.city)) cityInput.value = match.city;
      cityHelp.textContent = `${match.state} selected automatically for ${match.city}.`;
      return true;
    }

    stateSelect.addEventListener('change', () => {
      const existingCityMatch = getCityEntry(cityInput.value);
      // Clear only a recognized city that belongs to a different state. Preserve
      // manually typed cities that are not yet present in this curated catalog.
      if (existingCityMatch && existingCityMatch.state !== stateSelect.value) cityInput.value = '';
      cityHelp.textContent = stateSelect.value ? `Choose a city in ${stateSelect.value}, or type a city not listed.` : 'Choose a state to narrow the city list, or type a city to fill its state automatically.';
      if (!cityOptionsList.hidden) renderCityOptions(cityInput.value);
    });

    cityInput.addEventListener('input', () => {
      const matched = resolveCityAndState(cityInput.value, { updateCity: false, showFeedback: false });
      if (matched) {
        closeCityOptions();
      } else {
        if (cityInput.value.trim()) {
          cityHelp.textContent = stateSelect.value
            ? `Choose a city in ${stateSelect.value}, or keep typing if it is not listed.`
            : 'Choose a city from the suggestions to fill its state automatically.';
        } else {
          cityHelp.textContent = stateSelect.value ? `Choose a city in ${stateSelect.value}.` : 'Choose a state to narrow the city list, or type a city to fill its state automatically.';
        }
        renderCityOptions(cityInput.value);
      }
    });
    cityInput.addEventListener('change', () => {
      if (resolveCityAndState(cityInput.value, { updateCity: true })) closeCityOptions();
    });
    cityInput.addEventListener('blur', () => {
      // Let the dropdown arrow and option buttons receive pointer input without
      // the delayed blur handler immediately hiding the menu again.
      window.setTimeout(() => {
        const focusedElement = document.activeElement;
        const focusInsidePicker = focusedElement === cityInput
          || focusedElement === cityDropdownToggle
          || cityOptionsList.contains(focusedElement);
        if (!focusInsidePicker) {
          closeCityOptions();
          resolveCityAndState(cityInput.value, { updateCity: true });
        }
      }, 140);
    });

    // Preserve input focus when the arrow is clicked. This avoids a blur/focus
    // race that previously caused the options panel to open and close instantly.
    cityDropdownToggle.addEventListener('mousedown', event => event.preventDefault());
    cityDropdownToggle.addEventListener('click', () => {
      if (cityOptionsList.hidden) {
        // The arrow means "show the available cities", not "filter to the
        // currently selected city". Typing in the input still filters live.
        renderCityOptions('');
        cityInput.focus();
      } else {
        closeCityOptions();
      }
    });

    cityOptionsList.addEventListener('mousedown', event => {
      if (event.target.closest('[data-city][data-state]')) event.preventDefault();
    });

    cityOptionsList.addEventListener('click', event => {
      const option = event.target.closest('[data-city][data-state]');
      if (!option) return;
      chooseCity(option.dataset.city, option.dataset.state);
      cityInput.focus();
    });

    cityInput.addEventListener('keydown', event => {
      const options = [...cityOptionsList.querySelectorAll('[data-city]')];
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (cityOptionsList.hidden) renderCityOptions(cityInput.value);
        const currentOptions = [...cityOptionsList.querySelectorAll('[data-city]')];
        if (currentOptions.length) {
          activeCityOption = Math.min(activeCityOption + 1, currentOptions.length - 1);
          currentOptions.forEach((option, index) => option.setAttribute('aria-selected', String(index === activeCityOption)));
          cityInput.setAttribute('aria-activedescendant', currentOptions[activeCityOption].id);
          currentOptions[activeCityOption].scrollIntoView({ block: 'nearest' });
        }
      } else if (event.key === 'ArrowUp' && !cityOptionsList.hidden) {
        event.preventDefault();
        if (options.length) {
          activeCityOption = Math.max(activeCityOption - 1, 0);
          options.forEach((option, index) => option.setAttribute('aria-selected', String(index === activeCityOption)));
          cityInput.setAttribute('aria-activedescendant', options[activeCityOption].id);
          options[activeCityOption].scrollIntoView({ block: 'nearest' });
        }
      } else if (event.key === 'Enter' && !cityOptionsList.hidden && options.length) {
        const target = options[activeCityOption >= 0 ? activeCityOption : 0];
        if (target) {
          event.preventDefault();
          chooseCity(target.dataset.city, target.dataset.state);
        }
      } else if (event.key === 'Escape' && !cityOptionsList.hidden) {
        event.preventDefault();
        closeCityOptions();
      }
    });

    document.addEventListener('click', event => {
      if (!event.target.closest('.city-combobox')) closeCityOptions();
    });

    function syncLocationDropdownsFromText(location) {
      const normalized = normalizeSearchText(location);
      if (!normalized) {
        stateSelect.value = '';
        cityInput.value = '';
        cityHelp.textContent = 'Choose a state to narrow the city list, or type a city to fill its state automatically.';
        closeCityOptions();
        return;
      }
      const cityEntries = allCityEntries().sort((a, b) => b.city.length - a.city.length);
      const cityMatch = cityEntries.find(entry => normalized.includes(normalizeSearchText(entry.city)))
        || [...normalizedCityAliases.entries()].map(([alias, entry]) => ({ alias, ...entry }))
          .sort((a, b) => b.alias.length - a.alias.length)
          .find(entry => normalized.includes(entry.alias));
      if (cityMatch) {
        stateSelect.value = cityMatch.state;
        cityInput.value = cityMatch.city;
        cityHelp.textContent = `${cityMatch.state} selected automatically for ${cityMatch.city}.`;
        closeCityOptions();
        return;
      }
      const stateMatch = Object.keys(locationOptions).find(state => normalized.includes(normalizeSearchText(state)));
      if (stateMatch) {
        stateSelect.value = stateMatch;
        cityInput.value = '';
        cityHelp.textContent = `Choose a city in ${stateMatch}.`;
      }
      closeCityOptions();
    }

    document.getElementById('heroSearch').addEventListener('submit', event => {
      event.preventDefault();
      activeKeyword = document.getElementById('heroQuery').value.trim();
      resolveCityAndState(cityInput.value, { updateCity: true });
      const state = stateSelect.value;
      const city = cityInput.value.trim();
      activeLocation = [city, state].filter(Boolean).join(' ');
      document.getElementById('resultSearchInput').value = [activeKeyword, activeLocation ? `near ${activeLocation}` : ''].filter(Boolean).join(' ');
      activeCategory = 'all';
      syncCategoryButtons();
      renderListings();
      document.getElementById('find-care').scrollIntoView({behavior:'smooth'});
    });

    document.getElementById('resultsSearch').addEventListener('submit', event => event.preventDefault());
    document.getElementById('resultSearchInput').addEventListener('input', event => {
      const parsed = splitCombinedSearch(event.target.value);
      activeKeyword = parsed.keyword;
      activeLocation = parsed.location;
      document.getElementById('heroQuery').value = activeKeyword;
      syncLocationDropdownsFromText(activeLocation);
      renderListings();
    });
    document.getElementById('clearSearch').addEventListener('click', clearSearchResults);
    document.getElementById('emptyClear').addEventListener('click', clearSearchResults);

    document.getElementById('categoryGrid').addEventListener('click', event => {
      const card = event.target.closest('[data-category]');
      if (!card) return;
      activeCategory = activeCategory === card.dataset.category ? 'all' : card.dataset.category;
      syncCategoryButtons();
      renderListings();
      document.getElementById('find-care').scrollIntoView({behavior:'smooth'});
    });

    document.getElementById('emergencyButton').addEventListener('click', () => {
      activeCategory = 'ambulance';
      syncCategoryButtons();
      renderListings();
      document.getElementById('find-care').scrollIntoView({behavior:'smooth'});
    });

    grid.addEventListener('click', event => {
      const details = event.target.closest('[data-details]');
      if (details) showDetails(details.dataset.details);
    });

    document.addEventListener('click', event => {
      const openTrigger = event.target.closest('[data-open]');
      if (openTrigger) openModal(openTrigger.dataset.open);
      const closeTrigger = event.target.closest('[data-close]');
      if (closeTrigger) closeModal(closeTrigger.closest('.modal-backdrop'));
      if (event.target.classList.contains('modal-backdrop')) closeModal(event.target);
    });

    document.addEventListener('keydown', event => {
      if (activeModal && activeModal.classList.contains('open')) {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeModal(activeModal);
          return;
        }
        if (event.key === 'Tab') {
          const focusable = getFocusableElements(activeModal);
          if (!focusable.length) {
            event.preventDefault();
            return;
          }
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && (document.activeElement === first || !activeModal.contains(document.activeElement))) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && (document.activeElement === last || !activeModal.contains(document.activeElement))) {
            event.preventDefault();
            first.focus();
          }
        }
      } else if (event.key === 'Escape') {
        closeMobileNavigation();
      }
    });

    function closeMobileNavigation() {
      const nav = document.getElementById('navLinks');
      const button = document.getElementById('mobileMenu');
      nav.classList.remove('mobile-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
    }

    document.getElementById('businessForm').addEventListener('submit', event => {
      event.preventDefault();
      document.getElementById('businessForm').style.display = 'none';
      const success = document.getElementById('businessSuccess');
      success.style.display = 'block';
      success.querySelector('h3').setAttribute('tabindex', '-1');
      success.querySelector('h3').focus();
    });

    document.getElementById('correctionForm').addEventListener('submit', event => {
      event.preventDefault();
      document.getElementById('correctionForm').style.display = 'none';
      const success = document.getElementById('correctionSuccess');
      success.style.display = 'block';
      success.querySelector('h3').setAttribute('tabindex', '-1');
      success.querySelector('h3').focus();
    });

    document.getElementById('mobileMenu').addEventListener('click', () => {
      const nav = document.getElementById('navLinks');
      const button = document.getElementById('mobileMenu');
      const isOpen = nav.classList.toggle('mobile-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    document.querySelectorAll('#navLinks a').forEach(link => link.addEventListener('click', () => {
      closeMobileNavigation();
      if (link.getAttribute('href') === '#heroSearch') {
        window.setTimeout(() => document.getElementById('heroQuery')?.focus({ preventScroll: true }), 350);
      }
    }));
    document.addEventListener('click', event => {
      const nav = document.getElementById('navLinks');
      const button = document.getElementById('mobileMenu');
      if (nav.classList.contains('mobile-open') && !nav.contains(event.target) && !button.contains(event.target)) {
        closeMobileNavigation();
      }
    });

    bindImageFallbacks(document);
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
      const heroFail = () => {
        heroImage.hidden = true;
        heroImage.parentElement.classList.add('image-fallback');
      };
      heroImage.addEventListener('error', heroFail, { once:true });
      if (heroImage.complete && heroImage.naturalWidth === 0) heroFail();
    }
    syncCategoryButtons();
    renderListings();
