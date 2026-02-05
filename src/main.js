import './style.css'

// Global function for tab switching
window.switchEducationTab = function (level) {
    // Hide all contents
    ['tk', 'sd', 'smp'].forEach(l => {
        const content = document.getElementById(`content-${l}`);
        const tab = document.getElementById(`tab-${l}`);

        if (content) {
            content.classList.add('hidden');
        }

        if (tab) {
            // Reset to inactive style
            if (l === 'smp') {
                tab.className = 'edu-tab px-8 py-3 rounded-full font-bold text-lg bg-white text-blue-600 hover:bg-blue-50 border border-blue-200 transition-all hover:shadow-md cursor-pointer';
            } else {
                tab.className = 'edu-tab px-8 py-3 rounded-full font-bold text-lg bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 transition-all hover:shadow-md cursor-pointer';
            }
        }
    });

    // Show selected content
    const selectedContent = document.getElementById(`content-${level}`);
    const selectedTab = document.getElementById(`tab-${level}`);

    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    if (selectedTab) {
        // Set active style
        if (level === 'smp') {
            selectedTab.className = 'edu-tab px-8 py-3 rounded-full font-bold text-lg bg-blue-600 text-white shadow-lg transition-all transform hover:-translate-y-1 ring-4 ring-blue-100 cursor-pointer';
        } else {
            selectedTab.className = 'edu-tab px-8 py-3 rounded-full font-bold text-lg bg-primary text-white shadow-lg transition-all transform hover:-translate-y-1 ring-4 ring-emerald-100 cursor-pointer';
        }
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon between bars and times (X)
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                // Reset icon
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});
