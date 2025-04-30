document.addEventListener('DOMContentLoaded', function() {
    // Tour data
    const tourData = {
        'town-tour': {
            name: 'Town Tour',
            price: 1000,
            time: '3/4pm - 8pm',
            description: 'Lualhati park • Mt Tapyas View Deck • Cashew site • Souvenir shops • Coron Circle • Maquinit hotspring'
        },
        'mt-talapay': {
            name: 'Mt. Talapay & Town Tour',
            price: 6500, // Using private tour price as base
            time: '2pm - 8pm',
            description: 'Mt Talapay • Lualhati park • Mt Tapyas View Deck • Cashew site • Souvenir shops • Coron Circle • Maquinit hotspring'
        },
        'tour-a': {
            name: 'Tour A',
            price: 1200,
            time: '9am - 6pm',
            description: 'Kayangan lake • CYC • Coral garden • Quinn reef • Green lagoon'
        },
        'tour-b': {
            name: 'Tour B',
            price: 1400,
            time: '9am - 6pm',
            description: 'Barracuda lake • Twin lagoon • Reef garden • Banol beach • Balinsasayaw'
        },
        'super-ultimate': {
            name: 'Super Ultimate',
            price: 1900,
            time: '9am - 6pm',
            description: 'Kayangan lake • Twin lagoon • Barracuda lake • Coral garden • CYC • Banol beach • Skeleton wreck'
        },
        'island-escapade': {
            name: 'Island Escapade',
            price: 1700,
            time: '9am - 6pm',
            description: 'Malcapuya island /Ditaytayan • Banana island • Coco Beach/Bulog Dos'
        },
        'reef-wreck': {
            name: 'Reef & Wreck',
            price: 1700,
            time: '9am - 6pm',
            description: 'Pass Island • Sangat coral garden • Lusong shipwreck'
        },
        'calauit': {
            name: 'Calauit Safari',
            price: 2800,
            time: '7am - 6pm',
            description: 'Calauit wildlife sanctuary • Black island Cave & Beach • Buluang Fishpond'
        },
        'dugong': {
            name: 'Dugong Watching',
            price: 3700,
            time: '6 hours (5am to 7am - 1pm to 2pm)',
            description: 'Dugong area'
        }
    };

    // DOM elements
    const tourButtons = document.querySelectorAll('.btn-select');
    const selectedToursContainer = document.querySelector('.selected-tours');
    const emptyState = document.querySelector('.empty-state');
    const totalElement = document.querySelector('.total span:last-child');
    const bookButton = document.getElementById('book-now');
    
    // Initialize
    let selectedTours = [];
    let airportTransfer = true; // Default: include airport transfer
    const airportTransferPrice = 500; // Price for two-way airport transfer
    
    // Update summary
    function updateSummary() {
        // Clear selected tours container
        while (selectedToursContainer.firstChild) {
            selectedToursContainer.removeChild(selectedToursContainer.firstChild);
        }
        
        // Show empty state if no tours selected
        if (selectedTours.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            
            // Add selected tours to the container
            selectedTours.forEach((tourId, index) => {
                const tour = tourData[tourId];
                const tourElement = document.createElement('div');
                tourElement.classList.add('selected-tour-item');
                
                tourElement.innerHTML = `
                    <div class="tour-info">
                        <h4>${tour.name}</h4>
                        <p>${tour.time}</p>
                    </div>
                    <div class="tour-actions">
                        <span class="tour-price">₱${tour.price.toLocaleString()}</span>
                        <button class="btn-remove" data-index="${index}">✕</button>
                    </div>
                `;
                
                selectedToursContainer.appendChild(tourElement);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.btn-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    selectedTours.splice(index, 1);
                    updateSummary();
                });
            });
        }
        
        // Calculate total
        let total = airportTransfer ? airportTransferPrice : 0;
        selectedTours.forEach(tourId => {
            total += tourData[tourId].price;
        });
        
        // Update total element
        totalElement.textContent = `₱${total.toLocaleString()}`;
    }
    
    // Add event listeners to tour buttons
    tourButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tourCard = this.closest('.tour-card');
            const tourId = tourCard.getAttribute('data-tour');
            
            // Check if already selected
            if (selectedTours.includes(tourId)) {
                alert('This tour is already in your itinerary.');
                return;
            }
            
            // Add to selected tours (maximum 2)
            if (selectedTours.length < 2) {
                selectedTours.push(tourId);
                updateSummary();
                
                // Highlight selected card
                tourCard.classList.add('selected');
            } else {
                alert('You can only select up to 2 tours. Please remove a tour before adding another one.');
            }
        });
    });
    
    // Toggle airport transfer
    document.querySelector('.summary-item').addEventListener('click', function() {
        airportTransfer = !airportTransfer;
        this.querySelector('span:last-child').textContent = airportTransfer ? 
            `₱${airportTransferPrice} (two-way)` : 'Not included';
        updateSummary();
    });
    
    // Book button event
    bookButton.addEventListener('click', function() {
        if (selectedTours.length === 0) {
            alert('Please select at least one tour to book.');
            return;
        }
        
        let message = 'Your itinerary:\n\n';
        
        selectedTours.forEach(tourId => {
            const tour = tourData[tourId];
            message += `- ${tour.name} (${tour.time}): ₱${tour.price.toLocaleString()}\n`;
        });
        
        if (airportTransfer) {
            message += `- Airport Transfer (two-way): ₱${airportTransferPrice}\n`;
        }
        
        // Calculate total
        let total = airportTransfer ? airportTransferPrice : 0;
        selectedTours.forEach(tourId => {
            total += tourData[tourId].price;
        });
        
        message += `\nTotal: ₱${total.toLocaleString()}`;
        message += '\n\nThank you for booking with Marvelous Travel & Tours!';
        message += '\nFor further details, please contact us at:\n09175555117 / 09506329169';
        
        alert(message);
    });
    
    // Initialize the summary
    updateSummary();

    // Activity suggestion toggles
    const suggestionHeaders = document.querySelectorAll('.activity-suggestions h4');
    suggestionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'flex' : 'none';
            this.classList.toggle('collapsed');
        });
    });

    // Date formatting for the itinerary
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
}); 