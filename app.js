/**
 * CRIMSON BITES - Interactive Client Script
 * Bengaluru, India (Lavelle Road & Church Street)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. MENU DATA STORE
  // ==========================================
  const menuData = [
    // --- BREWS & ELIXIRS ---
    {
      id: 'brew-1',
      title: 'Chikmagalur Reserve Pour-Over',
      category: 'brews',
      diet: 'vegan',
      price: 320,
      badge: 'Single Origin',
      desc: 'Hand-poured single-estate Arabica from Baba Budangiri hills, roasted medium-dark with notes of dark plum, roasted hazelnut, and cocoa nibs.',
      tags: ['Manual V60', 'Karnataka Estate', 'Single Origin'],
      isSignature: true
    },
    {
      id: 'brew-2',
      title: 'Smoked Crimson Mocha',
      category: 'brews',
      diet: 'veg',
      price: 380,
      badge: 'Signature',
      desc: 'Double shot espresso infused with single-origin Madagascan chocolate, cold-smoked applewood, velvety textured milk, and crimson berry dust.',
      tags: ['Smoked In-House', 'Valrhona Cocoa'],
      isSignature: true
    },
    {
      id: 'brew-3',
      title: 'Velvet Cold Brew Cascara Tonic',
      category: 'brews',
      diet: 'vegan',
      price: 340,
      badge: 'Popular',
      desc: '18-hour slow steeped cold brew paired with artisanal botanical cascara tonic, Meyer lemon zest, and fresh rosemary sprig over carved crystal ice.',
      tags: ['18h Cold Brew', 'Botanical Tonic'],
      isSignature: false
    },
    {
      id: 'brew-4',
      title: 'Bengaluru Spiced Cortado',
      category: 'brews',
      diet: 'veg',
      price: 290,
      badge: 'Local Twist',
      desc: 'Equal parts ristretto and silky steamed milk infused with crushed green cardamom, Malabar cinnamon, and a hint of wild Coorg honey.',
      tags: ['Spiced', 'Double Ristretto'],
      isSignature: false
    },
    {
      id: 'brew-5',
      title: 'Midnight Affogato al Pistachio',
      category: 'brews',
      diet: 'veg',
      price: 360,
      badge: 'Late Night Favorite',
      desc: 'Handcrafted Sicilian roasted pistachio gelato drowned tableside in a steaming shot of intense Coorg dark roast espresso.',
      tags: ['Gelato', 'Tableside Pour'],
      isSignature: false
    },

    // --- ARTISAN DESSERTS ---
    {
      id: 'dessert-1',
      title: 'The Crimson Ruby Mirror Entremet',
      category: 'desserts',
      diet: 'veg',
      price: 460,
      badge: 'Chef Special',
      desc: 'Silky raspberry-crimson mirror glaze over Belgian dark chocolate mousse, almond joconde sponge, and tart wild berry compote with 24k gold leaf flecks.',
      tags: ['24k Gold Leaf', 'Belgian Chocolate'],
      isSignature: true
    },
    {
      id: 'dessert-2',
      title: 'Burnt Basque Cheesecake & Spiced Coulis',
      category: 'desserts',
      diet: 'veg',
      price: 420,
      badge: 'Bestseller',
      desc: 'Caramelized mahogany crust with an ultra-creamy molten center, served with house-reduced crimson hibiscus and black cherry coulis.',
      tags: ['Molten Center', 'Gluten-Free Option'],
      isSignature: false
    },
    {
      id: 'dessert-3',
      title: 'Dark Chocolate Ganache & Sea Salt Tart',
      category: 'desserts',
      diet: 'veg',
      price: 390,
      badge: 'Signature',
      desc: '70% dark cocoa tart shell filled with smoked sea salt chocolate ganache, candied blood orange peel, and gold dusted hazelnut praline.',
      tags: ['70% Single Origin', 'Flaky Sea Salt'],
      isSignature: false
    },
    {
      id: 'dessert-4',
      title: 'Pistachio Kunafa Baklava Croissant',
      category: 'desserts',
      diet: 'veg',
      price: 380,
      badge: 'Trending',
      desc: 'Twice-baked French butter croissant stuffed with rosewater cheese custard, topped with crispy browned kataifi pastry and roasted pistachios.',
      tags: ['Twice Baked', 'Pure Butter'],
      isSignature: false
    },
    {
      id: 'dessert-5',
      title: 'Midnight Tiramisu Jar with Kahlúa Mist',
      category: 'desserts',
      diet: 'veg',
      price: 410,
      badge: 'Indulgent',
      desc: 'Savoiardi ladyfingers soaked in our Chikmagalur espresso, layered with whipped mascarpone cream and dusted with raw Dutch cocoa.',
      tags: ['House Mascarpone', 'Espresso Soaked'],
      isSignature: false
    },

    // --- SAVORY BITES & SMALL PLATES ---
    {
      id: 'savory-1',
      title: 'Truffle Burrata & Wild Mushroom Brioche',
      category: 'smallplates',
      diet: 'veg',
      price: 480,
      badge: 'Signature',
      desc: 'Toasted artisanal brioche tartine smothered in creamy Italian burrata, pan-seared wild shiitake mushrooms, aged balsamic reduction, and arugula.',
      tags: ['Italian Burrata', 'Truffle Glaze'],
      isSignature: true
    },
    {
      id: 'savory-2',
      title: 'Charred Halloumi & Fig Tartine',
      category: 'smallplates',
      diet: 'veg',
      price: 440,
      badge: 'Popular',
      desc: 'Grilled Cypriot halloumi on artisan sourdough with poached Turkish figs, toasted pine nuts, pomegranate molasses, and fresh mint.',
      tags: ['Sourdough', 'Artisan Cheese'],
      isSignature: false
    },
    {
      id: 'savory-3',
      title: 'Smoked Paprika Lotus Stem Crisps',
      category: 'smallplates',
      diet: 'vegan',
      price: 310,
      badge: 'Crunch Bar',
      desc: 'Thinly sliced lotus root tossed in Spanish smoked paprika, garlic dust, and lime zest, served with a velvety roasted pepper dip.',
      tags: ['Vegan', 'Gluten Free', 'Bar Snack'],
      isSignature: false
    },
    {
      id: 'savory-4',
      title: 'Pulled Confit Chicken & Jalapeño Brioche Sliders',
      category: 'smallplates',
      diet: 'nonveg',
      price: 490,
      badge: 'Chef Special',
      desc: 'Slow-braised spiced chicken confit, melted sharp cheddar, pickled pink jalapeños, and smoky chipotle aioli on pair of toasted mini brioche buns.',
      tags: ['Non-Veg', 'Brioche Sliders'],
      isSignature: false
    },
    {
      id: 'savory-5',
      title: 'Smoked Salmon & Herbed Cream Cheese Bagel',
      category: 'smallplates',
      diet: 'nonveg',
      price: 540,
      badge: 'Deluxe',
      desc: 'Norwegian cold-smoked salmon slices, whipped dill cream cheese, caper berries, pickled shallots on hand-rolled toasted sesame bagel.',
      tags: ['Non-Veg', 'Norwegian Salmon'],
      isSignature: false
    },

    // --- CRIMSON SIGNATURE PAIRINGS ---
    {
      id: 'pairing-1',
      title: 'The Midnight Lavelle Pairing',
      category: 'signatures',
      diet: 'veg',
      price: 720,
      badge: 'Curated Pair',
      desc: 'A slice of our Crimson Ruby Mirror Entremet served alongside a cup of Smoked Crimson Mocha. Designed for two or an indulgent solo night.',
      tags: ['Best Value', 'Dessert + Brew'],
      isSignature: true
    },
    {
      id: 'pairing-2',
      title: 'The Bangalore Twilight Trio',
      category: 'signatures',
      diet: 'veg',
      price: 850,
      badge: 'Tasting Flight',
      desc: 'Three miniature pour-over flights (Chikmagalur, Coorg, Wayanad) paired with artisan chocolate truffles and burnt Basque bites.',
      tags: ['Tasting Flight', 'Tasting Notes'],
      isSignature: true
    }
  ];

  // ==========================================
  // 2. STATE MANAGEMENT
  // ==========================================
  let currentCategory = 'all';
  let currentDietFilter = 'all';
  const trayCart = new Map(); // id -> { item, quantity }

  // ==========================================
  // 3. DOM ELEMENTS
  // ==========================================
  const menuContainer = document.getElementById('menu-items-grid');
  const categoryTabBtns = document.querySelectorAll('.tab-btn');
  const dietFilterBtns = document.querySelectorAll('.diet-btn');
  const navbar = document.querySelector('.site-header');

  // Tray Drawer Elements
  const trayTriggerBtn = document.getElementById('tray-trigger-btn');
  const trayDrawerOverlay = document.getElementById('tray-drawer-overlay');
  const trayCloseBtn = document.getElementById('tray-close-btn');
  const trayItemsList = document.getElementById('tray-items-list');
  const traySubtotalVal = document.getElementById('tray-subtotal-val');
  const trayCountBadge = document.getElementById('tray-count-badge');
  const btnProceedReserve = document.getElementById('btn-tray-proceed');

  // Modal Elements
  const reservationModalOverlay = document.getElementById('reservation-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const reserveForm = document.getElementById('reserve-table-form');
  const openModalBtns = document.querySelectorAll('[data-open-modal="reservation"]');

  // Location / Copy Elements
  const copyAddressBtn = document.getElementById('btn-copy-address');
  const liveStatusPill = document.getElementById('live-status-pill');
  const toastNotice = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');

  // ==========================================
  // 4. HEADER SCROLL DETECTION
  // ==========================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 5. LIVE IST CAFE STATUS INDICATOR
  // ==========================================
  function updateLiveCafeStatus() {
    // Bengaluru is UTC+5:30
    const now = new Date();
    // Crimson Bites opens 11:00 AM to 1:30 AM every day
    // Current local time
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentDecimal = currentHour + currentMinute / 60;

    // Open from 11.0 (11:00 AM) until 25.5 (1:30 AM next day)
    // In 24h format: 11:00 to 23:59 or 00:00 to 01:30
    const isOpen = currentDecimal >= 11.0 || currentDecimal <= 1.5;

    if (liveStatusPill) {
      if (isOpen) {
        liveStatusPill.innerHTML = `
          <span class="status-pulse-dot"></span>
          <span>Open Tonight • Till 1:30 AM</span>
        `;
        liveStatusPill.style.borderColor = 'rgba(49, 170, 169, 0.4)';
        liveStatusPill.style.color = 'var(--teal)';
      } else {
        liveStatusPill.innerHTML = `
          <span class="status-pulse-dot" style="background:#f59e0b; box-shadow:0 0 10px #f59e0b;"></span>
          <span>Opens Today at 11:00 AM</span>
        `;
        liveStatusPill.style.borderColor = 'rgba(245, 158, 11, 0.4)';
        liveStatusPill.style.color = '#f59e0b';
      }
    }
  }
  updateLiveCafeStatus();
  setInterval(updateLiveCafeStatus, 60000);

  // ==========================================
  // 6. RENDER MENU ITEMS
  // ==========================================
  function renderMenu() {
    if (!menuContainer) return;

    // Filter items
    const filtered = menuData.filter(item => {
      const matchCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchDiet = currentDietFilter === 'all' || item.diet === currentDietFilter;
      return matchCategory && matchDiet;
    });

    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; color: var(--cream); margin-bottom: 0.5rem;">No items found matching your filter.</p>
          <p style="font-size: 0.9rem;">Try selecting another category or dietary preference.</p>
        </div>
      `;
      return;
    }

    menuContainer.innerHTML = filtered.map(item => {
      const dietIconClass = item.diet === 'veg' || item.diet === 'vegan' ? 'veg' : 'non-veg';
      const dietLabel = item.diet === 'vegan' ? 'Vegan' : (item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian');
      
      return `
        <article class="menu-card" data-id="${item.id}">
          <div>
            <div class="menu-card-header">
              <div class="menu-card-title-group">
                <span class="food-type-icon ${dietIconClass}" title="${dietLabel}"></span>
                <h3 class="menu-card-title">${item.title}</h3>
              </div>
              <span class="menu-card-price">₹${item.price}</span>
            </div>
            <p class="menu-card-desc">${item.desc}</p>
          </div>

          <div class="menu-card-footer">
            <div class="menu-tags-wrap">
              ${item.isSignature ? '<span class="menu-tag signature">★ Chef Signature</span>' : ''}
              ${item.tags.map(t => `<span class="menu-tag">${t}</span>`).join('')}
            </div>
            <button class="btn-card-add" data-add-id="${item.id}" aria-label="Add ${item.title} to selection">
              <span>+ Add</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click events to "+ Add" buttons
    menuContainer.querySelectorAll('[data-add-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-add-id');
        addToTray(itemId);
      });
    });
  }

  // Category filter clicks
  categoryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });

  // Dietary filter clicks
  dietFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dietFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDietFilter = btn.getAttribute('data-diet');
      renderMenu();
    });
  });

  // Initial render
  renderMenu();

  // Attach Spotlight Add Buttons
  document.querySelectorAll('[data-spotlight-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-spotlight-add');
      addToTray(id);
    });
  });

  // ==========================================
  // 7. TABLE TRAY (ORDER TRAY) DRAWER LOGIC
  // ==========================================
  function addToTray(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    if (trayCart.has(itemId)) {
      const existing = trayCart.get(itemId);
      existing.quantity += 1;
    } else {
      trayCart.set(itemId, { item, quantity: 1 });
    }

    updateTrayUI();
    showToast(`Added "${item.title}" to your Table Tray!`);
  }

  function removeFromTray(itemId) {
    if (trayCart.has(itemId)) {
      const existing = trayCart.get(itemId);
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        trayCart.delete(itemId);
      }
      updateTrayUI();
    }
  }

  function updateTrayUI() {
    let totalItems = 0;
    let subtotal = 0;

    trayItemsList.innerHTML = '';

    if (trayCart.size === 0) {
      trayItemsList.innerHTML = `
        <div class="tray-empty-state">
          <div style="font-size: 2.5rem; margin-bottom: 0.8rem; opacity: 0.4;">☕️</div>
          <p style="color: var(--cream); font-weight: 600; margin-bottom: 0.3rem;">Your Table Tray is empty</p>
          <p style="font-size: 0.85rem;">Select brews, artisan bakes, or small plates from the menu to build your tasting order.</p>
        </div>
      `;
    } else {
      trayCart.forEach(({ item, quantity }) => {
        totalItems += quantity;
        subtotal += item.price * quantity;

        const row = document.createElement('div');
        row.className = 'tray-item-card';
        row.innerHTML = `
          <div class="tray-item-info">
            <span class="tray-item-name">${item.title}</span>
            <span class="tray-item-price">₹${item.price} × ${quantity} = ₹${item.price * quantity}</span>
          </div>
          <div class="tray-item-controls">
            <button class="btn-qty" data-minus-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span style="font-weight: 700; min-width: 18px; text-align: center; color: var(--cream);">${quantity}</span>
            <button class="btn-qty" data-plus-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
        `;
        trayItemsList.appendChild(row);
      });
    }

    traySubtotalVal.textContent = `₹${subtotal}`;
    trayCountBadge.textContent = totalItems;

    // Attach minus & plus event listeners
    trayItemsList.querySelectorAll('[data-minus-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromTray(btn.getAttribute('data-minus-id'));
      });
    });

    trayItemsList.querySelectorAll('[data-plus-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        addToTray(btn.getAttribute('data-plus-id'));
      });
    });
  }

  // Open/Close Tray
  if (trayTriggerBtn) {
    trayTriggerBtn.addEventListener('click', () => {
      trayDrawerOverlay.classList.add('active');
    });
  }

  if (trayCloseBtn) {
    trayCloseBtn.addEventListener('click', () => {
      trayDrawerOverlay.classList.remove('active');
    });
  }

  if (trayDrawerOverlay) {
    trayDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === trayDrawerOverlay) {
        trayDrawerOverlay.classList.remove('active');
      }
    });
  }

  // Proceed from tray to reservation
  if (btnProceedReserve) {
    btnProceedReserve.addEventListener('click', () => {
      trayDrawerOverlay.classList.remove('active');
      openReservationModal();
    });
  }

  // ==========================================
  // 8. TABLE RESERVATION MODAL
  // ==========================================
  function openReservationModal() {
    reservationModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Set minimum date to today
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      if (!dateInput.value) {
        dateInput.value = today;
      }
    }
  }

  function closeReservationModal() {
    reservationModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openReservationModal);
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeReservationModal);
  }

  if (reservationModalOverlay) {
    reservationModalOverlay.addEventListener('click', (e) => {
      if (e.target === reservationModalOverlay) {
        closeReservationModal();
      }
    });
  }

  // Reservation Form Submission
  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('res-name').value.trim();
      const phone = document.getElementById('res-phone').value.trim();
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      const guests = document.getElementById('res-guests').value;
      const zone = document.getElementById('res-zone').value;

      // Generate random booking code
      const bookingCode = 'CB-BLR-' + Math.floor(1000 + Math.random() * 9000);

      const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0.5rem;">
          <div style="width: 68px; height: 68px; background: rgba(49, 170, 169, 0.2); border: 2px solid var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.4rem; color: var(--teal); font-size: 2rem;">
            ✓
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--cream); margin-bottom: 0.6rem;">Reservation Confirmed!</h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.6rem;">
            Namaskara, <strong>${name}</strong>! Your table at Crimson Bites, Lavelle Road is reserved.
          </p>
          
          <div style="background: rgba(14, 4, 7, 0.8); border: 1px dashed var(--cream-border); border-radius: var(--radius-md); padding: 1.2rem; text-align: left; margin-bottom: 1.8rem; font-size: 0.9rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
              <span style="color: var(--text-muted);">Reference Code:</span>
              <strong style="color: var(--teal);">${bookingCode}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
              <span style="color: var(--text-muted);">Date & Time:</span>
              <span style="color: var(--cream);">${date} at ${time}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
              <span style="color: var(--text-muted);">Party Size:</span>
              <span style="color: var(--cream);">${guests} Guests</span>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span style="color: var(--text-muted);">Seating:</span>
              <span style="color: var(--cream);">${zone}</span>
            </div>
          </div>

          <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            An SMS and WhatsApp confirmation will be sent to <strong>${phone}</strong>. Valet parking is available at the Lavelle Road entrance.
          </p>

          <button id="btn-done-booking" class="btn-primary" style="width: 100%; justify-content: center;">
            Done & Return
          </button>
        </div>
      `;

      document.getElementById('btn-done-booking').addEventListener('click', () => {
        closeReservationModal();
        setTimeout(() => {
          location.reload(); // reset modal state
        }, 300);
      });
    });
  }

  // ==========================================
  // 9. COPY BENGALURU ADDRESS INTERACTION
  // ==========================================
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', () => {
      const addressText = "Crimson Bites, 42/1 Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001";
      navigator.clipboard.writeText(addressText).then(() => {
        const originalText = copyAddressBtn.innerHTML;
        copyAddressBtn.innerHTML = `<span>✓</span> <span>Copied!</span>`;
        copyAddressBtn.style.borderColor = 'var(--teal)';
        copyAddressBtn.style.color = 'var(--teal)';
        
        showToast("📍 Address copied to clipboard! See you on Lavelle Road.");

        setTimeout(() => {
          copyAddressBtn.innerHTML = originalText;
          copyAddressBtn.style.borderColor = '';
          copyAddressBtn.style.color = '';
        }, 3000);
      });
    });
  }

  // ==========================================
  // 10. TOAST NOTIFICATION UTILITY
  // ==========================================
  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotice || !toastMessage) return;

    toastMessage.textContent = msg;
    toastNotice.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3500);
  }

  // ==========================================
  // 11. NEWSLETTER SUBMISSION
  // ==========================================
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value.trim()) {
        showToast("✨ Welcome to the Crimson Midnight Circle! Check your inbox soon.");
        emailInput.value = '';
      }
    });
  }

  // ==========================================
  // 12. MOBILE HAMBURGER MENU
  // ==========================================
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinksList = document.querySelector('.nav-links');
  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksList.style.display === 'flex';
      if (isOpen) {
        navLinksList.style.display = 'none';
        mobileToggle.innerHTML = '☰';
      } else {
        navLinksList.style.display = 'flex';
        navLinksList.style.flexDirection = 'column';
        navLinksList.style.position = 'absolute';
        navLinksList.style.top = '100%';
        navLinksList.style.left = '0';
        navLinksList.style.right = '0';
        navLinksList.style.background = 'rgba(14, 4, 7, 0.98)';
        navLinksList.style.padding = '1.8rem 1.5rem';
        navLinksList.style.borderBottom = '1px solid var(--border-subtle)';
        navLinksList.style.gap = '1.2rem';
        mobileToggle.innerHTML = '✕';
      }
    });

    // Close when clicking a nav link on mobile
    navLinksList.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinksList.style.display = 'none';
          mobileToggle.innerHTML = '☰';
        }
      });
    });
  }

  // ==========================================
  // 13. INTERACTIVE MAP PIN TOOLTIPS
  // ==========================================
  const mapHotspots = document.querySelectorAll('.map-hotspot');
  mapHotspots.forEach(spot => {
    spot.addEventListener('mouseenter', () => {
      const info = spot.getAttribute('data-info');
      if (info) showToast(info);
    });
  });
});
