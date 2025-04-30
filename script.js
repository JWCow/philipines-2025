document.addEventListener('DOMContentLoaded', function() {
    // Calendar Dropdown Functionality
    const calendarCells = document.querySelectorAll('.calendar-cell[data-date]');
    const dayDetailsContainer = document.getElementById('day-details-container');
    const detailsDate = document.getElementById('details-date');
    const detailsContent = document.getElementById('day-details-content');
    const closeDetails = document.getElementById('close-details');
    
    // Day details data
    const dayDetails = {
        // May 1
        '1': {
            title: 'Departure to Airport',
            activities: [
                {
                    title: 'Departure to Airport',
                    time: '9:00 PM',
                    description: 'Depart to the airport for overnight flight'
                }
            ]
        },
        // May 2
        '2': {
            title: 'Arrive in Manila',
            activities: [
                {
                    title: 'Flight from Ho Chi Minh City to Manila',
                    time: '1:10 AM - 5:15 AM',
                    description: 'Cebu Pacific 5J 752',
                    price: 'Trip Cost: ₱12,000 ($215 USD)'
                },
                {
                    title: 'Check-in at Shelton\'s Home',
                    time: '6:30 AM',
                    description: 'Located near Taco Bell and Airport'
                }
            ],
            food: [
                {
                    title: "Taco Bell",
                    description: "Fast food Mexican-inspired restaurant",
                    location: "Moises's requested place",
                    mapLink: "https://maps.app.goo.gl/UjJ3JD8BwT1eVzfH8"
                },
                {
                    title: "Denny's",
                    description: "American diner chain",
                    mapLink: "https://maps.app.goo.gl/U4UVKqdJu8cz18vn6"
                }
            ]
        },
        // May 3
        '3': {
            title: 'Cart Witnessing',
            activities: [
                {
                    title: 'Cart Witnessing',
                    time: 'All Day',
                    description: 'Cart witnessing in Manila area'
                }
            ],
            food: [
                {
                    title: "Taco Bell",
                    description: "Fast food Mexican-inspired restaurant",
                    location: "Lunch after cart witnessing",
                    mapLink: "https://maps.app.goo.gl/UjJ3JD8BwT1eVzfH8"
                }
            ]
        },
        // May 4
        '4': {
            title: 'Travel to Coron',
            activities: [
                {
                    title: 'Flight from Manila to Coron/Busuanga',
                    time: '2:35 PM - 3:45 PM',
                    description: 'Philippine Airlines PR 2965',
                    price: 'Trip Cost: ₱10,000 ($179 USD)'
                },
                {
                    title: 'Check-in to Airbnb Accommodations',
                    time: '5:00 PM',
                    description: 'Room 1: Moe and Thu • Room 2: Jesse and Huong'
                }
            ]
        },
        // May 5
        '5': {
            title: 'Super Ultimate Tour',
            activities: [
                {
                    title: 'Super Ultimate Tour',
                    time: '9:00 AM - 6:00 PM',
                    description: 'Kayangan lake • Twin lagoon • Barracuda lake • Coral garden • CYC • Banol beach • Skeleton wreck',
                    price: '₱1,900 ($34 USD) per person'
                }
            ]
        },
        // May 6
        '6': {
            title: 'Reef & Wreck Tour',
            activities: [
                {
                    title: 'Reef & Wreck Tour',
                    time: '9:00 AM - 6:00 PM',
                    description: 'Pass Island • Sangat coral garden • Lusong shipwreck',
                    price: '₱1,700 ($30 USD) per person + ₱560 ($10 USD) for snorkel rental'
                }
            ]
        },
        // May 7
        '7': {
            title: 'Free Day in Coron',
            activities: [
                {
                    title: 'Free Day',
                    time: 'All Day',
                    description: 'Explore the town or relax at the beach'
                }
            ]
        },
        // May 8
        '8': {
            title: 'Return to Manila',
            activities: [
                {
                    title: 'Flight from Coron/Busuanga to Manila',
                    time: '7:45 AM - 8:55 AM',
                    description: 'Philippine Airlines PR 2962',
                    price: 'Trip Cost: ₱10,000 ($179 USD)'
                },
                {
                    title: 'Check-in to Witness Family Guest House',
                    time: '10:30 AM',
                    description: 'Located near KMS venue'
                }
            ]
        },
        // May 9
        '9': {
            title: 'Bethel Lunch',
            activities: [
                {
                    title: 'Special Lunch at Bethel',
                    time: '12:00 PM',
                    description: 'Lunch at Bethel branch'
                }
            ],
            food: [
                {
                    title: "Taco Bell",
                    description: "Fast food Mexican-inspired restaurant",
                    location: "Dinner after Bethel visit",
                    mapLink: "https://maps.app.goo.gl/UjJ3JD8BwT1eVzfH8"
                }
            ]
        },
        // May 10
        '10': {
            title: 'KMS',
            activities: [
                {
                    title: 'KMS Program',
                    time: 'All Day',
                    description: 'Special spiritual program'
                }
            ]
        },
        // May 11
        '11': {
            title: 'Divisoria Shopping / Moe Mating',
            activities: [
                {
                    title: 'Shopping at Divisoria',
                    time: 'Morning to Afternoon',
                    description: 'Famous shopping district in Manila'
                }
            ],
            food: [
                {
                    title: "Taco Bell",
                    description: "Fast food Mexican-inspired restaurant",
                    mapLink: "https://maps.app.goo.gl/UjJ3JD8BwT1eVzfH8"
                },
                {
                    title: "Wendy's",
                    description: "American fast food chain",
                    mapLink: "https://maps.app.goo.gl/vFkLdw4LxkBw5NWYA"
                },
                {
                    title: "Crosta Pizzeria",
                    description: "Artisan Pizza",
                    location: "Salcedo Village",
                    address: "104 HV Dela Costa, Cor L.P. Leviste Street, Makati",
                    mapLink: "https://maps.app.goo.gl/bZjVzUmZeVKbxdz88"
                },
                {
                    title: "a mano BGC",
                    description: "Italian restaurant",
                    location: "One Bonifacio High Street",
                    address: "Ground Floor, Unit LG22, One Bonifacio, High Street, Taguig",
                    mapLink: "https://maps.app.goo.gl/Wbzd89MKtBxXBhay5"
                }
            ]
        },
        // May 12
        '12': {
            title: 'Return to Ho Chi Minh City',
            activities: [
                {
                    title: 'Flight from Manila to Ho Chi Minh City',
                    time: '7:35 PM - 9:20 PM',
                    description: 'Cebu Pacific 5J 753',
                    price: 'Trip Cost: ₱12,000 ($215 USD)'
                }
            ]
        }
    };
    
    // Open day details
    function openDayDetails(date) {
        const details = dayDetails[date];
        if (!details) return;
        
        // Set date in header
        detailsDate.textContent = `May ${date}, 2025`;
        
        // Build content
        let contentHTML = '';
        
        // Activities section
        if (details.activities && details.activities.length > 0) {
            contentHTML += `
                <div class="detail-section">
                    <h4>Activities</h4>
                    <div class="detail-info">
            `;
            
            details.activities.forEach(activity => {
                contentHTML += `
                    <div class="detail-col">
                        <div class="detail-item">
                            <div class="detail-item-title">Activity</div>
                            <div class="detail-item-content">${activity.title}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-item-title">Time</div>
                            <div class="detail-item-content">${activity.time}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-item-title">Details</div>
                            <div class="detail-item-content">${activity.description}</div>
                        </div>
                        ${activity.price ? `
                        <div class="detail-item">
                            <div class="detail-item-title">Price</div>
                            <div class="detail-item-content price-info">${activity.price}</div>
                        </div>
                        ` : ''}
                    </div>
                `;
            });
            
            contentHTML += `
                    </div>
                </div>
            `;
        }
        
        // Food places section
        if (details.food && details.food.length > 0) {
            contentHTML += `
                <div class="detail-section">
                    <h4>Food Options</h4>
                    <div class="detail-info">
            `;
            
            details.food.forEach(food => {
                contentHTML += `
                    <div class="detail-col">
                        <div class="detail-item">
                            <div class="detail-item-title">Restaurant</div>
                            <div class="detail-item-content">${food.title}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-item-title">Description</div>
                            <div class="detail-item-content">${food.description}</div>
                        </div>
                        ${food.location ? `
                        <div class="detail-item">
                            <div class="detail-item-title">Location</div>
                            <div class="detail-item-content">${food.location}</div>
                        </div>
                        ` : ''}
                        ${food.address ? `
                        <div class="detail-item">
                            <div class="detail-item-title">Address</div>
                            <div class="detail-item-content">${food.address}</div>
                        </div>
                        ` : ''}
                        ${food.mapLink ? `
                        <div class="detail-item">
                            <div class="detail-item-title">Map</div>
                            <div class="detail-item-content">
                                <a href="${food.mapLink}" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                `;
            });
            
            contentHTML += `
                    </div>
                </div>
            `;
        }
        
        // Set content
        detailsContent.innerHTML = contentHTML;
        
        // Show the details container
        dayDetailsContainer.classList.add('active');

        // Calculate scroll position (simpler offset now header isn't sticky)
        const elementTop = dayDetailsContainer.getBoundingClientRect().top + window.scrollY;
        const targetScrollY = elementTop - 20; // 20px buffer from the top edge

        window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
        });
    }
    
    // Add click event to each calendar cell
    calendarCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const date = this.getAttribute('data-date');
            if (date) {
                openDayDetails(date);
            }
        });
    });
    
    // Close details
    closeDetails.addEventListener('click', function() {
        dayDetailsContainer.classList.remove('active');
    });
    
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

    // Scroll to Top Button Functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}); 