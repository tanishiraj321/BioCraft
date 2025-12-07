document.getElementById('generate-btn').addEventListener('click', function() {
    // 1. --- VALIDATION ---
    const requiredFields = [
        'name', 'dob', 'pob', 'religion', 'height', 'education', 
        'occupation', 'father-name', 'father-occupation', 
        'mother-name', 'address', 'contact-no'
    ];
    let isValid = true;
    requiredFields.forEach(field => {
        const el = document.getElementById(field);
        if (!el.value.trim()) {
            isValid = false;
            el.style.borderColor = 'red';
        } else { 
            el.style.borderColor = '#ddd'; // Reset border color on valid input
        }
    });

    if (!isValid) { 
        alert('Please fill all required fields (highlighted in red)'); 
        return; 
    }

    // 2. --- DATA PROCESSING ---
    const dob = document.getElementById('dob').value;
    // Format date as DD/MM/YYYY
    const dateObj = dob ? new Date(dob) : null;
    const formattedDob = dateObj ? dateObj.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }) : '';

    // Helper function for null/empty checks
    const getValue = (id, defaultValue = 'N/A') => document.getElementById(id).value.trim() || defaultValue;


    // 3. --- INJECTING DATA INTO PREVIEW ---

    // PERSONAL
    document.getElementById('preview-name').textContent = getValue('name', '');
    document.getElementById('preview-dob').textContent = formattedDob;
    document.getElementById('preview-pob').textContent = getValue('pob', '');
    document.getElementById('preview-rashi').textContent = getValue('rashi');
    document.getElementById('preview-manglik').textContent = getValue('manglik');
    document.getElementById('preview-religion').textContent = getValue('religion', '');
    document.getElementById('preview-caste').textContent = getValue('caste');
    document.getElementById('preview-height').textContent = getValue('height', '') + ' cm';
    document.getElementById('preview-blood-group').textContent = getValue('blood-group');
    document.getElementById('preview-complexion').textContent = getValue('complexion');
    document.getElementById('preview-education').textContent = getValue('education', '');
    document.getElementById('preview-occupation').textContent = getValue('occupation', '');

    // FAMILY
    document.getElementById('preview-grandfather-name').textContent = getValue('grandfather-name');
    document.getElementById('preview-father-name').textContent = getValue('father-name', '');
    document.getElementById('preview-father-occupation').textContent = getValue('father-occupation', '');
    document.getElementById('preview-mother-name').textContent = getValue('mother-name', '');
    document.getElementById('preview-mother-occupation').textContent = getValue('mother-occupation');
    document.getElementById('preview-brother-name').textContent = getValue('brother-name');
    document.getElementById('preview-brother-occupation').textContent = getValue('brother-occupation');
    document.getElementById('preview-sister-name').textContent = getValue('sister-name');
    document.getElementById('preview-sister-occupation').textContent = getValue('sister-occupation');

    // CONTACT
    document.getElementById('preview-address').textContent = getValue('address', '');
    document.getElementById('preview-contact-no').textContent = getValue('contact-no', '');
    document.getElementById('preview-email').textContent = getValue('email');

    // 4. --- DISPLAY PREVIEW ---
    const preview = document.getElementById('biodata-preview');
    preview.style.display = 'block';
    
    // Re-trigger animation (optional, for visual effect)
    preview.style.animation = 'none';
    void preview.offsetWidth; // Force reflow
    preview.style.animation = 'fadeIn 0.8s ease-in-out, glow 2s infinite alternate';
    
    // Scroll to the preview
    preview.scrollIntoView({ behavior: 'smooth' });
});