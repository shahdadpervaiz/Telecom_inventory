// Login Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cancelBtn = document.getElementById('cancelBtn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (username && password) {
                // In a real application, you would send this to a server
                // For demo purposes, we'll just redirect
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both username and password');
            }
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });
    }
    
    // Tab functionality for transactions page
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real application, you would show/hide content based on the tab
            });
        });
    }
    
    // Logout button functionality
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'index.html';
            }
        });
    }
});

// Additional functionality for Find Requests and Requests pages

// Auto refresh functionality for Requests page
document.addEventListener('DOMContentLoaded', function() {
    const autoRefreshCheckbox = document.querySelector('input[type="checkbox"]');
    let refreshInterval;
    
    if (autoRefreshCheckbox) {
        autoRefreshCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Start auto refresh (every 30 seconds as indicated in the UI)
                refreshInterval = setInterval(function() {
                    console.log('Refreshing data...');
                    // In a real application, you would fetch new data here
                    // For demo purposes, we'll just log to console
                }, 30000);
            } else {
                // Stop auto refresh
                clearInterval(refreshInterval);
            }
        });
        
        // Start auto refresh on page load
        if (autoRefreshCheckbox.checked) {
            refreshInterval = setInterval(function() {
                console.log('Refreshing data...');
            }, 30000);
        }
    }
    
    // Copy request functionality
    const copySingleRequestBtn = document.querySelector('.btn-primary');
    const copyRequestSetBtn = document.querySelector('.btn-secondary');
    
    if (copySingleRequestBtn && copyRequestSetBtn) {
        copySingleRequestBtn.addEventListener('click', function() {
            alert('Copy Single Request functionality would open here');
        });
        
        copyRequestSetBtn.addEventListener('click', function() {
            alert('Copy Request Set functionality would open here');
        });
    }
});