    // System Seed Data
    const INITIAL_USERS = [
      { 
        id: 'u_priya', 
        name: 'Priya Sharma', 
        email: 'priya@oakridge.org', 
        neighborhood: 'Oakridge Pines', 
        bio: 'Community garden organizer, amateur botanist, and book lover.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80', 
        role: 'resident',
        interests: 'Gardening, Flora, Tea',
        online: true
      },
      { 
        id: 'u_marcus', 
        name: 'Marcus Vance (Safety Desk)', 
        email: 'marcus@oakridge.org', 
        neighborhood: 'Town Hall Corridor', 
        bio: 'Civil coordinator, street repairs steward, and bicycle advocate.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80', 
        role: 'admin',
        interests: 'Civil Planning, Street Safety',
        online: true
      },
      { 
        id: 'u_elena', 
        name: 'Elena Rostova', 
        email: 'elena@oakridge.org', 
        neighborhood: 'Sunset Hill', 
        bio: 'Sourdough baker, rescue dog foster, Saturday market host.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80', 
        role: 'resident',
        interests: 'Baking, Dog Foster, Farmers Market',
        online: true
      },
      { 
        id: 'u_david', 
        name: 'David Kim', 
        email: 'david@oakridge.org', 
        neighborhood: 'Willow Creek', 
        bio: 'Woodworker, solar hobbyist, and youth soccer coach.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80', 
        role: 'resident',
        interests: 'Woodworking, Solar, Soccer',
        online: false
      },
      { 
        id: 'u_fatima', 
        name: 'Fatima Zahra', 
        email: 'fatima@oakridge.org', 
        neighborhood: 'Central Green', 
        bio: 'Local potter, birdwatcher, and public library volunteer.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80', 
        role: 'resident',
        interests: 'Pottery, Birding, Library',
        online: true
      }
    ];

    const INITIAL_POSTS = [
      {
        id: 'post-101',
        authorId: 'u_marcus',
        authorName: 'Marcus Vance (Safety Desk)',
        category: 'Local News',
        neighborhood: 'Town Hall Corridor',
        content: "🚨 Traffic Advisory: Water main resurfacing on Elm & 4th Avenue begins tomorrow morning at 7:30 AM. Expect single lane closures and short detours toward Park Road. Thank you for your patience while public works finishes the upgrades!",
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1000&auto=format&fit=crop&q=80',
        createdAt: '2 hours ago',
        likes: ['u_elena', 'u_priya'],
        reported: false,
        comments: [
          { id: 'c1', authorId: 'u_priya', authorName: 'Priya Sharma', text: 'Thanks for the heads up Marcus! Will adjust our morning school bike route.', createdAt: '1 hour ago' }
        ]
      },
      {
        id: 'post-102',
        authorId: 'u_elena',
        authorName: 'Elena Rostova',
        category: 'Lost & Found',
        neighborhood: 'Sunset Hill',
        content: "FOUND: Very friendly golden retriever mix with red collar (no tag attached) wandering near the playground on Sunset Creek trail. He's safe in our fenced backyard with water. Message me to claim!",
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000&auto=format&fit=crop&q=80',
        createdAt: '4 hours ago',
        likes: ['u_david', 'u_fatima'],
        reported: false,
        comments: []
      },
      {
        id: 'post-103',
        authorId: 'u_fatima',
        authorName: 'Fatima Zahra',
        category: 'Recommendations',
        neighborhood: 'Central Green',
        content: "Anyone have recommendations for a local chimney sweep or roof inspection before the autumn frost sets in? Looking for trusted neighborhood contractors.",
        image: null,
        createdAt: '6 hours ago',
        likes: ['u_marcus'],
        reported: false,
        comments: [
          { id: 'c2', authorId: 'u_david', authorName: 'David Kim', text: 'Miller & Sons did ours last November. Clean work and fair pricing!', createdAt: '5 hours ago' }
        ]
      }
    ];

    const INITIAL_EVENTS = [
      {
        id: 'ev-1',
        title: 'Oakridge Creek Saturday Clean-Up & Tree Planting',
        category: 'Cleanups',
        dateStr: 'Sat, Nov 14 • 9:00 AM - 12:30 PM',
        location: 'Heritage Mill Park Trailhead',
        organizer: 'Marcus Vance (Safety Desk)',
        organizerId: 'u_marcus',
        description: 'Join neighbors as we clear debris along the creek bank and plant 40 native red maple saplings. Gloves, trash bags, and hot cider provided for all attendees!',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
        attendees: ['u_marcus', 'u_elena', 'u_priya'],
        capacity: 60
      },
      {
        id: 'ev-2',
        title: 'Autumn Harvest Farmers & Artisan Market',
        category: 'Festivals',
        dateStr: 'Sun, Nov 15 • 10:00 AM - 4:00 PM',
        location: 'Oakridge Town Square Plaza',
        organizer: 'Elena Rostova',
        organizerId: 'u_elena',
        description: 'Over 35 local vendors showcasing fresh seasonal produce, artisan baked sourdough, handmade woodcrafts, honey jars, and live bluegrass acoustics.',
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&auto=format&fit=crop&q=80',
        attendees: ['u_elena', 'u_david'],
        capacity: 250
      },
      {
        id: 'ev-3',
        title: 'Master Composting & Winter Soil Prep Workshop',
        category: 'Workshops',
        dateStr: 'Wed, Nov 18 • 6:30 PM - 8:00 PM',
        location: 'Community Center, Hall B',
        organizer: 'Priya Sharma',
        organizerId: 'u_priya',
        description: 'Learn simple techniques to keep kitchen compost running hot throughout winter, avoid rodent pests, and condition heavy clay soil for spring vegetable beds.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80',
        attendees: ['u_priya', 'u_fatima'],
        capacity: 35
      }
    ];

    const INITIAL_COMMUNITIES = [
      {
        id: 'hub-1',
        name: 'Green Thumb Gardeners',
        category: 'Hobbies & Gardening',
        neighborhood: 'Village-Wide',
        description: 'Passionate backyard gardeners swapping heirloom seeds, soil advice, perennial cuttings, and bumper crop surplus.',
        members: ['u_priya', 'u_elena'],
        icon: '🌱',
        cover: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a23?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'hub-2',
        name: 'Neighborhood Safety & Watch',
        category: 'Public Safety',
        neighborhood: 'All Sectors',
        description: 'Coordinated patrol volunteers working with town emergency services for streetlight repairs, traffic calming, and safe sidewalks.',
        members: ['u_marcus', 'u_david'],
        icon: '🛡️',
        cover: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'hub-3',
        name: 'Oakridge Artisan Bakers & Cooks',
        category: 'Food & Culinary',
        neighborhood: 'Sunset Hill',
        description: 'Home cooks exchanging sourdough starters, seasonal canning recipes, potluck dinners, and holiday baked treat boxes.',
        members: ['u_elena', 'u_fatima'],
        icon: '🥖',
        cover: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
      }
    ];

    const INITIAL_NOTIFICATIONS = [
      { id: 'notif-1', title: 'Welcome to Oakridge Hub', body: 'Explore discussions, message neighbors directly, and register for events.', time: 'Just now', read: false, icon: '🏘️' },
      { id: 'notif-2', title: 'Civic Advisory', body: 'Leaf bag collection will run through next Thursday afternoon.', time: '2h ago', read: false, icon: '🍂' }
    ];

    // Seed Messages with conversation threads
    const INITIAL_MESSAGES = [
      {
        id: 'msg-seed-1',
        senderId: 'u_elena',
        receiverId: 'u_priya',
        text: "Hi Priya! Are you bringing any of your heirloom tomato seeds to the workshop this weekend?",
        timestamp: '10:15 AM',
        createdAt: Date.now() - 3600000,
        read: true
      },
      {
        id: 'msg-seed-2',
        senderId: 'u_priya',
        receiverId: 'u_elena',
        text: "Yes Elena! I packaged 15 envelopes of Cherokee Purple and Green Zebra seeds for you.",
        timestamp: '10:20 AM',
        createdAt: Date.now() - 3200000,
        read: true
      },
      {
        id: 'msg-seed-3',
        senderId: 'u_marcus',
        receiverId: 'u_david',
        text: "Hey David, did the public works team check the sidewalk dip near your driveway yet?",
        timestamp: 'Yesterday',
        createdAt: Date.now() - 86400000,
        read: true
      }
    ];

    class HometownApp {
      constructor() {
        this.currentView = 'feed';
        this.activeEventFilter = 'All';
        this.activePostCategory = 'All';
        this.searchQuery = '';
        this.authMode = 'signup';
        this.reportingPostId = null;
        this.activeChatPartnerId = null; // Contact user id for 1-on-1 messaging
        this.isTyping = false;
        this.theme = localStorage.getItem('hh_theme') || 'light';

        this.loadState();
      }

      loadState() {
        this.users = JSON.parse(localStorage.getItem('hh_users')) || INITIAL_USERS;
        this.posts = JSON.parse(localStorage.getItem('hh_posts')) || INITIAL_POSTS;
        this.events = JSON.parse(localStorage.getItem('hh_events')) || INITIAL_EVENTS;
        this.communities = JSON.parse(localStorage.getItem('hh_communities')) || INITIAL_COMMUNITIES;
        this.notifications = JSON.parse(localStorage.getItem('hh_notifications')) || INITIAL_NOTIFICATIONS;
        this.messages = JSON.parse(localStorage.getItem('hh_messages')) || INITIAL_MESSAGES;

        // Strict Guest Default
        const savedUserId = localStorage.getItem('hh_active_user_id');
        this.currentUser = savedUserId ? (this.users.find(u => u.id === savedUserId) || null) : null;
      }

      saveState() {
        localStorage.setItem('hh_users', JSON.stringify(this.users));
        localStorage.setItem('hh_posts', JSON.stringify(this.posts));
        localStorage.setItem('hh_events', JSON.stringify(this.events));
        localStorage.setItem('hh_communities', JSON.stringify(this.communities));
        localStorage.setItem('hh_notifications', JSON.stringify(this.notifications));
        localStorage.setItem('hh_messages', JSON.stringify(this.messages));

        if (this.currentUser) {
          localStorage.setItem('hh_active_user_id', this.currentUser.id);
        } else {
          localStorage.removeItem('hh_active_user_id');
        }
      }

      init() {
        this.applyTheme();
        this.setupEventListeners();
        this.renderAll();
      }

      applyTheme() {
        const root = document.documentElement;
        const sun = document.getElementById('themeIconSun');
        const moon = document.getElementById('themeIconMoon');

        if (this.theme === 'dark') {
          root.classList.add('dark');
          if (sun) sun.classList.remove('hidden');
          if (moon) moon.classList.add('hidden');
        } else {
          root.classList.remove('dark');
          if (sun) sun.classList.add('hidden');
          if (moon) moon.classList.remove('hidden');
        }
        localStorage.setItem('hh_theme', this.theme);
      }

      toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.showToast(`Switched to ${this.theme} mode`, 'info');
      }

      setupEventListeners() {
        const searchInput = document.getElementById('globalSearchInput');
        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase().trim();
            this.renderViewContent();
          });
        }
      }

      renderAll() {
        this.updateAuthNav();
        this.updateNotificationBadges();
        this.updateUnreadMessageBadges();
        this.navigate(this.currentView);
      }

      /* ----------------------------------------------------
       * AUTHENTICATION & GUEST BAR
       * --------------------------------------------------- */
      updateAuthNav() {
        const container = document.getElementById('authNavContainer');
        const banner = document.getElementById('guestNoticeBanner');
        if (!container) return;

        if (this.currentUser) {
          if (banner) banner.classList.add('hidden');
          container.innerHTML = `
            <div class="relative">
              <button onclick="app.toggleProfileDropdown()" class="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <img class="w-8 h-8 rounded-full object-cover border border-brand-500" src="${this.currentUser.avatar}" alt="avatar">
                <div class="text-left hidden md:block">
                  <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 max-w-[110px] truncate leading-tight">${this.currentUser.name}</span>
                  <span class="block text-[9px] text-brand-600 dark:text-brand-400 font-semibold leading-tight truncate">🏡 ${this.currentUser.neighborhood || 'Resident'}</span>
                </div>
                <span class="text-[10px] uppercase font-bold text-slate-400">▾</span>
              </button>
              
              <div id="userDropdown" class="hidden absolute right-0 mt-2 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50">
                <div class="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Resident</p>
                  <p class="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">${this.currentUser.name}</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400 truncate">${this.currentUser.email}</p>
                </div>
                <div class="py-1">
                  <button onclick="app.openEditProfileModal(); app.toggleProfileDropdown();" class="w-full text-left px-4 py-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 flex items-center gap-2 transition-colors">
                    <span>✏️</span> Edit Profile
                  </button>
                  <button onclick="app.navigate('messages'); app.toggleProfileDropdown();" class="w-full text-left px-4 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2">
                    <span>💬</span> Private Messages
                  </button>
                  <button onclick="app.handleNewEventClick(); app.toggleProfileDropdown();" class="w-full text-left px-4 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2">
                    <span>📅</span> Host an Event
                  </button>
                  <button onclick="app.handleNewCommunityClick(); app.toggleProfileDropdown();" class="w-full text-left px-4 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2">
                    <span>🌱</span> Create Community
                  </button>
                </div>
                <div class="border-t border-slate-100 dark:border-slate-800 pt-1">
                  <button onclick="app.handleLogout()" class="w-full text-left px-4 py-2 text-xs text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-1.5 font-semibold">
                    <span>🚪</span> Sign Out (Back to Guest)
                  </button>
                </div>
              </div>
            </div>
          `;
        } else {
          if (banner) banner.classList.remove('hidden');
          container.innerHTML = `
            <div class="flex items-center gap-2">
              <div class="relative">
                <button onclick="app.toggleProfileDropdown()" class="flex items-center gap-1.5 py-1.5 px-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs transition-all">
                  <div class="w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-xs">👤</div>
                  <div class="text-left hidden sm:block">
                    <span class="block text-xs font-bold text-slate-700 dark:text-slate-200 leading-tight">Guest</span>
                    <span class="block text-[9px] text-slate-400 dark:text-slate-500 font-semibold leading-tight">Read-Only</span>
                  </div>
                  <span class="text-[9px] text-slate-400 font-bold ml-0.5">▾</span>
                </button>

                <div id="userDropdown" class="hidden absolute right-0 mt-2 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-3 z-50">
                  <div class="text-center pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div class="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl mb-1">👤</div>
                    <p class="font-bold text-sm text-slate-900 dark:text-white">Guest Mode</p>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">Sign in to unlock neighbor chats & posting</p>
                  </div>
                  <div class="pt-2 space-y-1.5">
                    <button onclick="app.openAuthModal('signup'); app.toggleProfileDropdown();" class="w-full py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-colors">
                      Create Account
                    </button>
                    <button onclick="app.openAuthModal('login'); app.toggleProfileDropdown();" class="w-full py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>

              <button onclick="app.openAuthModal('signup')" class="hidden sm:inline-flex px-3.5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-500/20 transition-all items-center gap-1">
                <span>Sign Up</span>
              </button>
            </div>
          `;
        }

        const reportsCount = this.posts.filter(p => p.reported && !p.removed).length;
        const navModBadge = document.getElementById('navModBadge');
        if (navModBadge) navModBadge.classList.toggle('hidden', reportsCount === 0);
      }

      toggleProfileDropdown() {
        const dd = document.getElementById('userDropdown');
        if (dd) dd.classList.toggle('hidden');
      }

      requireAuth(actionMessage = 'perform this action') {
        if (!this.currentUser) {
          const desc = document.getElementById('guestPromptDesc');
          if (desc) desc.textContent = `You are browsing as Guest. Please create an account or sign in to ${actionMessage}.`;
          document.getElementById('guestPromptModal').classList.remove('hidden');
          return false;
        }
        return true;
      }

      closeGuestPromptModal() {
        document.getElementById('guestPromptModal').classList.add('hidden');
      }

      guestModalGoSignup() {
        this.closeGuestPromptModal();
        this.openAuthModal('signup');
      }

      guestModalGoLogin() {
        this.closeGuestPromptModal();
        this.openAuthModal('login');
      }

      /* ----------------------------------------------------
       * AUTH SUBMIT & TABS
       * --------------------------------------------------- */
      openAuthModal(mode = 'signup') {
        this.authMode = mode;
        this.setAuthTab(mode);
        document.getElementById('authModal').classList.remove('hidden');
      }

      closeAuthModal() {
        document.getElementById('authModal').classList.add('hidden');
      }

      setAuthTab(mode) {
        this.authMode = mode;
        const tabLogin = document.getElementById('authTabLogin');
        const tabSignup = document.getElementById('authTabSignup');
        const signupFields = document.getElementById('signupSpecificFields');
        const submitBtn = document.getElementById('authSubmitBtn');
        const subtitle = document.getElementById('authSubtitle');

        if (mode === 'signup') {
          tabSignup.className = 'font-display font-extrabold text-lg text-brand-600 dark:text-brand-400 border-b-2 border-brand-500 pb-2 -mb-3.5 transition-colors';
          tabLogin.className = 'font-display font-bold text-lg text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-2 -mb-3.5 transition-colors';
          signupFields.classList.remove('hidden');
          submitBtn.innerHTML = '<span>Create My Account & Join</span>';
          subtitle.textContent = 'Register with your neighborhood to post updates, message neighbors, and join circles.';
        } else {
          tabLogin.className = 'font-display font-extrabold text-lg text-brand-600 dark:text-brand-400 border-b-2 border-brand-500 pb-2 -mb-3.5 transition-colors';
          tabSignup.className = 'font-display font-bold text-lg text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-2 -mb-3.5 transition-colors';
          signupFields.classList.add('hidden');
          submitBtn.innerHTML = '<span>Sign In to Hometown Hub</span>';
          subtitle.textContent = 'Welcome back! Enter your email and password to access your resident profile.';
        }
      }

      handleAuthSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('authEmailInput').value.trim();

        if (this.authMode === 'signup') {
          const name = document.getElementById('authNameInput').value.trim();
          const neighborhood = document.getElementById('authNeighborhoodInput').value.trim();

          if (!name || !neighborhood) {
            this.showToast('Please provide your name and neighborhood', 'error');
            return;
          }

          const newUser = {
            id: 'user_' + Date.now(),
            name,
            email,
            neighborhood,
            bio: 'Oakridge Village resident.',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
            role: 'resident',
            interests: 'Community, Gardening, Local News',
            online: true,
            createdAt: new Date().toISOString()
          };

          this.users.push(newUser);
          this.currentUser = newUser;
          this.saveState();
          this.closeAuthModal();
          this.renderAll();
          this.showToast(`Account created! Welcome, ${newUser.name}`, 'success');
        } else {
          const existing = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
          if (existing) {
            this.currentUser = existing;
            this.saveState();
            this.closeAuthModal();
            this.renderAll();
            this.showToast(`Welcome back, ${existing.name}!`, 'success');
          } else {
            const newUser = {
              id: 'user_' + Date.now(),
              name: email.split('@')[0],
              email,
              neighborhood: 'Oakridge Terrace',
              bio: 'Village resident and neighbor.',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
              role: 'resident',
              online: true
            };
            this.users.push(newUser);
            this.currentUser = newUser;
            this.saveState();
            this.closeAuthModal();
            this.renderAll();
            this.showToast(`Logged in as ${newUser.name}!`, 'success');
          }
        }
      }

      handleLogout() {
        this.currentUser = null;
        this.activeChatPartnerId = null;
        this.saveState();
        this.renderAll();
        this.showToast('Switched to Guest mode', 'info');
      }

      /* ----------------------------------------------------
       * EDIT PROFILE
       * --------------------------------------------------- */
      openEditProfileModal() {
        if (!this.requireAuth('edit your resident profile')) return;

        document.getElementById('editProfileNameInput').value = this.currentUser.name || '';
        document.getElementById('editProfileNeighborhoodInput').value = this.currentUser.neighborhood || '';
        document.getElementById('editProfileBioInput').value = this.currentUser.bio || '';
        document.getElementById('editProfileAvatarInput').value = this.currentUser.avatar || '';
        document.getElementById('editProfileAvatarPreview').src = this.currentUser.avatar;
        document.getElementById('editProfileInterestsInput').value = this.currentUser.interests || '';

        document.getElementById('editProfileModal').classList.remove('hidden');
      }

      closeEditProfileModal() {
        document.getElementById('editProfileModal').classList.add('hidden');
      }

      previewEditAvatar(url) {
        if (url && url.trim().length > 6) {
          document.getElementById('editProfileAvatarPreview').src = url.trim();
        }
      }

      selectPresetAvatar(url) {
        document.getElementById('editProfileAvatarInput').value = url;
        document.getElementById('editProfileAvatarPreview').src = url;
      }

      handleSaveProfile(e) {
        e.preventDefault();
        if (!this.currentUser) return;

        const name = document.getElementById('editProfileNameInput').value.trim();
        const neighborhood = document.getElementById('editProfileNeighborhoodInput').value.trim();
        const bio = document.getElementById('editProfileBioInput').value.trim();
        const avatar = document.getElementById('editProfileAvatarInput').value.trim() || this.currentUser.avatar;
        const interests = document.getElementById('editProfileInterestsInput').value.trim();

        if (!name || !neighborhood) {
          this.showToast('Please provide your name and neighborhood', 'error');
          return;
        }

        this.currentUser.name = name;
        this.currentUser.neighborhood = neighborhood;
        this.currentUser.bio = bio;
        this.currentUser.avatar = avatar;
        this.currentUser.interests = interests;

        const u = this.users.find(usr => usr.id === this.currentUser.id);
        if (u) Object.assign(u, this.currentUser);

        this.posts.forEach(p => {
          if (p.authorId === this.currentUser.id) {
            p.authorName = name;
            p.neighborhood = neighborhood;
          }
        });

        this.saveState();
        this.closeEditProfileModal();
        this.renderAll();
        this.showToast('Profile updated successfully!', 'success');
      }

      /* ----------------------------------------------------
       * NAVIGATION ROUTER
       * --------------------------------------------------- */
      navigate(view) {
        this.currentView = view;
        const views = ['feed', 'events', 'communities', 'messages', 'admin'];

        views.forEach(v => {
          const el = document.getElementById(`view-${v}`);
          if (el) el.classList.toggle('hidden', v !== view);

          const desktopBtn = document.getElementById(`nav-btn-${v}`);
          if (desktopBtn) {
            if (v === view) {
              desktopBtn.className = "relative px-3 py-2 rounded-lg font-bold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 border border-brand-200/50 dark:border-brand-800/50 flex items-center gap-1.5 shadow-xs";
            } else {
              desktopBtn.className = "relative px-3 py-2 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5";
            }
          }

          const mobBtn = document.getElementById(`mob-nav-${v}`);
          if (mobBtn) {
            mobBtn.classList.toggle('text-brand-600', v === view);
            mobBtn.classList.toggle('dark:text-brand-400', v === view);
          }
        });

        this.renderViewContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      renderViewContent() {
        if (this.currentView === 'feed') this.renderFeedView();
        else if (this.currentView === 'events') this.renderEventsView();
        else if (this.currentView === 'communities') this.renderCommunitiesView();
        else if (this.currentView === 'messages') this.renderMessagesView();
        else if (this.currentView === 'admin') this.renderAdminView();
      }

      /* ----------------------------------------------------
       * 1-ON-1 DIRECT MESSAGING SYSTEM
       * --------------------------------------------------- */
      quickOpenMessenger() {
        if (!this.requireAuth('send direct messages to neighbors')) return;
        this.navigate('messages');
      }

      startDirectChatWith(userId) {
        if (!this.requireAuth('message this neighbor')) return;
        if (this.currentUser && this.currentUser.id === userId) {
          this.showToast("That's your own profile!", 'info');
          return;
        }

        this.activeChatPartnerId = userId;
        this.navigate('messages');
      }

      openNewChatModal() {
        if (!this.requireAuth('start new conversations')) return;
        this.renderMemberPickerList('');
        document.getElementById('newChatModal').classList.remove('hidden');
      }

      closeNewChatModal() {
        document.getElementById('newChatModal').classList.add('hidden');
      }

      renderMemberPickerList(query = '') {
        const container = document.getElementById('memberPickerList');
        if (!container) return;

        const q = query.toLowerCase().trim();
        const availableNeighbors = this.users.filter(u => {
          if (this.currentUser && u.id === this.currentUser.id) return false;
          if (!q) return true;
          return u.name.toLowerCase().includes(q) || 
                 (u.neighborhood && u.neighborhood.toLowerCase().includes(q)) || 
                 (u.interests && u.interests.toLowerCase().includes(q));
        });

        if (availableNeighbors.length === 0) {
          container.innerHTML = `
            <div class="py-8 text-center text-slate-400 text-xs">
              No neighbors found matching "${query}".
            </div>
          `;
          return;
        }

        container.innerHTML = availableNeighbors.map(n => `
          <div onclick="app.selectChatPartner('${n.id}')" class="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between cursor-pointer transition-colors">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img src="${n.avatar}" class="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700">
                ${n.online ? '<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900"></span>' : ''}
              </div>
              <div>
                <h4 class="font-bold text-xs text-slate-900 dark:text-white">${n.name}</h4>
                <p class="text-[10px] text-slate-400">🏡 ${n.neighborhood || 'Oakridge Village'}</p>
                ${n.interests ? `<span class="text-[9px] text-brand-600 dark:text-brand-400">${n.interests}</span>` : ''}
              </div>
            </div>
            <button class="px-3 py-1 bg-brand-600 text-white rounded-lg text-xs font-semibold hover:bg-brand-700">Chat</button>
          </div>
        `).join('');
      }

      selectChatPartner(userId) {
        this.activeChatPartnerId = userId;
        this.closeNewChatModal();
        this.renderMessagesView();
      }

      renderMessagesView() {
        const container = document.getElementById('view-messages');
        if (!container) return;

        if (!this.currentUser) {
          container.innerHTML = `
            <div class="max-w-md mx-auto my-12 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center shadow-lg">
              <div class="w-16 h-16 mx-auto rounded-3xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center text-3xl mb-4">
                💬
              </div>
              <h2 class="font-display font-extrabold text-xl text-slate-900 dark:text-white">Direct Neighbor Messaging</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Send private 1-on-1 messages to any neighbor in Oakridge Village regarding lost pets, seed exchanges, tool borrowing, or block events.
              </p>
              <div class="mt-6 flex flex-col gap-2">
                <button onclick="app.openAuthModal('signup')" class="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-500/20">
                  Create Resident Profile
                </button>
                <button onclick="app.openAuthModal('login')" class="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl">
                  Sign In
                </button>
              </div>
            </div>
          `;
          return;
        }

        // Compute Distinct Threads for Current User
        const currentId = this.currentUser.id;
        const myThreads = [];
        const partnerIds = new Set();

        this.messages.forEach(m => {
          if (m.senderId === currentId) partnerIds.add(m.receiverId);
          if (m.receiverId === currentId) partnerIds.add(m.senderId);
        });

        // Ensure at least default sample neighbors exist as conversation starters if empty
        if (partnerIds.size === 0) {
          const defaultPartner = this.users.find(u => u.id !== currentId);
          if (defaultPartner) partnerIds.add(defaultPartner.id);
        }

        partnerIds.forEach(pId => {
          const partner = this.users.find(u => u.id === pId);
          if (!partner) return;

          // Find conversation messages between current user and partner
          const convo = this.messages.filter(m => 
            (m.senderId === currentId && m.receiverId === pId) ||
            (m.senderId === pId && m.receiverId === currentId)
          ).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

          const lastMsg = convo[convo.length - 1];
          const unreadCount = convo.filter(m => m.receiverId === currentId && !m.read).length;

          myThreads.push({
            partner,
            lastMessage: lastMsg ? lastMsg.text : 'Click to say hello!',
            timestamp: lastMsg ? lastMsg.timestamp : '',
            rawTime: lastMsg ? lastMsg.createdAt : 0,
            unreadCount
          });
        });

        myThreads.sort((a, b) => b.rawTime - a.rawTime);

        // If no active partner selected, select the first thread partner
        if (!this.activeChatPartnerId && myThreads.length > 0) {
          this.activeChatPartnerId = myThreads[0].partner.id;
        }

        // Active Partner Object
        const activePartner = this.users.find(u => u.id === this.activeChatPartnerId) || (myThreads[0] ? myThreads[0].partner : null);

        // Mark messages with active partner as read
        if (activePartner) {
          this.messages.forEach(m => {
            if (m.senderId === activePartner.id && m.receiverId === currentId) {
              m.read = true;
            }
          });
          this.saveState();
          this.updateUnreadMessageBadges();
        }

        // Filter conversation messages for active partner
        const activeConvo = activePartner ? this.messages.filter(m =>
          (m.senderId === currentId && m.receiverId === activePartner.id) ||
          (m.senderId === activePartner.id && m.receiverId === currentId)
        ).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0)) : [];

        container.innerHTML = `
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row h-[720px] max-h-[82vh]">
            
            <!-- LEFT COLUMN: THREAD LIST & DIRECTORY BUTTON -->
            <div class="w-full md:w-80 lg:w-96 border-r border-slate-100 dark:border-slate-800 flex flex-col shrink-0 bg-slate-50/60 dark:bg-slate-950/40">
              
              <!-- Threads Header -->
              <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 class="font-display font-extrabold text-base text-slate-900 dark:text-white">Messages</h3>
                  <span class="text-[11px] text-slate-400">${myThreads.length} Neighbor conversations</span>
                </div>
                <button onclick="app.openNewChatModal()" class="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1">
                  <span>+</span> New Chat
                </button>
              </div>

              <!-- Threads Search Filter -->
              <div class="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                <input type="text" id="threadSearchInput" oninput="app.filterThreads(this.value)" placeholder="Search conversations..." 
                       class="w-full text-xs px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-brand-500 text-slate-800 dark:text-slate-100">
              </div>

              <!-- Scrollable Thread List -->
              <div id="threadListScrollable" class="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                ${myThreads.length === 0 ? `
                  <div class="p-8 text-center text-slate-400 text-xs">
                    <p class="text-2xl mb-2">👋</p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">No conversations yet</p>
                    <p class="mt-1">Click "+ New Chat" to say hello to a neighbor!</p>
                  </div>
                ` : myThreads.map(t => {
                  const isActive = activePartner && activePartner.id === t.partner.id;
                  return `
                    <div onclick="app.selectChatPartner('${t.partner.id}')" 
                         class="p-3.5 flex items-start gap-3 cursor-pointer transition-colors ${isActive ? 'bg-white dark:bg-slate-900 border-l-4 border-brand-500 shadow-2xs' : 'hover:bg-slate-100/70 dark:hover:bg-slate-800/50'}">
                      <div class="relative shrink-0">
                        <img src="${t.partner.avatar}" class="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-700">
                        ${t.partner.online ? '<span class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900"></span>' : ''}
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between">
                          <h4 class="font-bold text-xs text-slate-900 dark:text-white truncate">${t.partner.name}</h4>
                          <span class="text-[10px] text-slate-400 whitespace-nowrap ml-2">${t.timestamp}</span>
                        </div>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate">🏡 ${t.partner.neighborhood || 'Oakridge'}</p>
                        <p class="text-xs text-slate-600 dark:text-slate-300 truncate mt-1 ${t.unreadCount > 0 ? 'font-bold text-slate-900 dark:text-white' : ''}">${t.lastMessage}</p>
                      </div>
                      ${t.unreadCount > 0 ? `
                        <span class="shrink-0 w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">${t.unreadCount}</span>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>

            </div>

            <!-- RIGHT COLUMN: ACTIVE CHAT ROOM -->
            <div class="flex-1 flex flex-col bg-white dark:bg-slate-900">
              ${activePartner ? `
                
                <!-- Chat Room Header -->
                <div class="p-3.5 sm:px-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="relative">
                      <img src="${activePartner.avatar}" class="w-10 h-10 rounded-full object-cover border-2 border-brand-500">
                      ${activePartner.online ? '<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900"></span>' : ''}
                    </div>
                    <div>
                      <h3 class="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                        <span>${activePartner.name}</span>
                        ${activePartner.role === 'admin' ? '<span class="badge-pill bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">Mod</span>' : ''}
                      </h3>
                      <p class="text-[11px] text-slate-400">🏡 ${activePartner.neighborhood || 'Oakridge'} • <span class="text-emerald-600 dark:text-emerald-400 font-semibold">${activePartner.online ? 'Active in Village' : 'Offline'}</span></p>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <button onclick="app.showToast('Neighbor contact details verified by Oakridge Community desk', 'info')" title="Verified Neighbor" class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg">
                      🛡️
                    </button>
                    <button onclick="app.openNewChatModal()" class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                      All Neighbors
                    </button>
                  </div>
                </div>

                <!-- Chat Message Stream -->
                <div id="activeChatStream" class="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-950/30 text-xs">
                  ${activeConvo.length === 0 ? `
                    <div class="text-center py-16 text-slate-400">
                      <p class="text-3xl mb-2">👋</p>
                      <p class="font-semibold text-slate-700 dark:text-slate-200">Start the conversation with ${activePartner.name}</p>
                      <p class="text-[11px] mt-1">Ask about neighborhood tools, seeds, events, or local tips.</p>
                      <div class="mt-4 flex flex-wrap justify-center gap-2">
                        <button onclick="app.sendQuickStarter('Hi ${activePartner.name}! Do you know when the Saturday market opens?')" class="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50">
                          "Market hours?"
                        </button>
                        <button onclick="app.sendQuickStarter('Hey neighbor! Would love to borrow or swap gardening tools this week.')" class="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50">
                          "Tool swap?"
                        </button>
                      </div>
                    </div>
                  ` : activeConvo.map(m => {
                    const isMe = m.senderId === currentId;
                    return `
                      <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
                        <div class="max-w-[78%] sm:max-w-[65%] rounded-2xl px-4 py-2.5 shadow-xs ${isMe ? 'bg-brand-600 text-white rounded-br-xs' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-xs'}">
                          <p class="leading-relaxed whitespace-pre-wrap">${m.text}</p>
                        </div>
                        <span class="text-[9px] text-slate-400 mt-1 px-1">${m.timestamp}</span>
                      </div>
                    `;
                  }).join('')}

                  <!-- Typing Indicator -->
                  <div id="typingIndicatorBox" class="hidden flex items-center gap-2 text-slate-400 text-xs">
                    <img src="${activePartner.avatar}" class="w-5 h-5 rounded-full object-cover">
                    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-2xs">
                      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                    </div>
                    <span class="text-[10px] text-slate-400">${activePartner.name} is typing...</span>
                  </div>
                </div>

                <!-- Chat Input Form -->
                <form onsubmit="app.handleSendDirectMessage(event)" class="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <button type="button" onclick="app.insertEmojiIntoChat('🌻')" class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-base" title="Add flower emoji">
                    🌻
                  </button>
                  <button type="button" onclick="app.insertEmojiIntoChat('🤝')" class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-base" title="Add handshake emoji">
                    🤝
                  </button>
                  <input type="text" id="directMessageInput" placeholder="Message ${activePartner.name}..." required
                         class="flex-1 bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm px-4 py-2.5 rounded-full border border-transparent focus:border-brand-500 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400">
                  <button type="submit" class="p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full transition-colors flex items-center justify-center shadow-md shadow-brand-500/20 active:scale-95">
                    <svg class="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  </button>
                </form>

              ` : `
                <div class="flex-1 flex items-center justify-center p-8 text-center text-slate-400">
                  <div>
                    <span class="text-4xl block mb-2">💬</span>
                    <p class="font-bold text-slate-700 dark:text-slate-300">Select a conversation or click "+ New Chat"</p>
                  </div>
                </div>
              `}
            </div>

          </div>
        `;

        this.scrollChatToBottom();
      }

      insertEmojiIntoChat(emoji) {
        const input = document.getElementById('directMessageInput');
        if (input) {
          input.value += emoji + ' ';
          input.focus();
        }
      }

      sendQuickStarter(text) {
        const input = document.getElementById('directMessageInput');
        if (input) {
          input.value = text;
          this.handleSendDirectMessage(new Event('submit'));
        }
      }

      handleSendDirectMessage(e) {
        if (e) e.preventDefault();
        if (!this.requireAuth('send messages')) return;

        const input = document.getElementById('directMessageInput');
        if (!input) return;
        const text = input.value.trim();
        if (!text || !this.activeChatPartnerId) return;

        const partnerId = this.activeChatPartnerId;
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const newMsg = {
          id: 'msg-' + Date.now(),
          senderId: this.currentUser.id,
          receiverId: partnerId,
          text,
          timestamp: timeStr,
          createdAt: Date.now(),
          read: true
        };

        this.messages.push(newMsg);
        this.saveState();
        input.value = '';
        this.renderMessagesView();

        // Trigger Simulated Realistic Auto-Response from the Neighbor
        this.triggerSimulatedNeighborResponse(partnerId, text);
      }

      triggerSimulatedNeighborResponse(partnerId, userMessage) {
        const partner = this.users.find(u => u.id === partnerId);
        if (!partner) return;

        const typingIndicator = document.getElementById('typingIndicatorBox');
        if (typingIndicator) typingIndicator.classList.remove('hidden');
        this.scrollChatToBottom();

        setTimeout(() => {
          if (typingIndicator) typingIndicator.classList.add('hidden');

          // Realistic Contextual Neighborhood Replies
          const responses = [
            `Hi ${this.currentUser.name}! Thanks for reaching out. Yes, absolutely happy to coordinate that with you!`,
            `Sounds great! I'll be around Sunset Hill this afternoon if you'd like to meet up or drop by.`,
            `Thanks for the note! I'll check with our community circle committee and let you know before the weekend.`,
            `Got it! Let me know if you need any extra tools or supplies from our shed.`,
            `Wonderful! See you at the upcoming Oakridge event. Have a great day!`
          ];
          const autoText = responses[Math.floor(Math.random() * responses.length)];

          const now = new Date();
          const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          const partnerReply = {
            id: 'msg-' + Date.now(),
            senderId: partner.id,
            receiverId: this.currentUser.id,
            text: autoText,
            timestamp: timeStr,
            createdAt: Date.now(),
            read: (this.currentView === 'messages' && this.activeChatPartnerId === partner.id)
          };

          this.messages.push(partnerReply);
          this.saveState();

          if (this.currentView === 'messages' && this.activeChatPartnerId === partner.id) {
            this.renderMessagesView();
          } else {
            this.updateUnreadMessageBadges();
            this.showToast(`New message from ${partner.name}`, 'info');
          }
        }, 1600);
      }

      scrollChatToBottom() {
        const stream = document.getElementById('activeChatStream');
        if (stream) {
          setTimeout(() => { stream.scrollTop = stream.scrollHeight; }, 50);
        }
      }

      filterThreads(query) {
        const q = query.toLowerCase().trim();
        const items = document.querySelectorAll('#threadListScrollable > div');
        items.forEach(el => {
          const text = el.innerText.toLowerCase();
          el.style.display = text.includes(q) ? 'flex' : 'none';
        });
      }

      updateUnreadMessageBadges() {
        if (!this.currentUser) {
          document.getElementById('navMsgBadge')?.classList.add('hidden');
          document.getElementById('chatDot')?.classList.add('hidden');
          document.getElementById('mobMsgBadge')?.classList.add('hidden');
          return;
        }

        const unreadCount = this.messages.filter(m => m.receiverId === this.currentUser.id && !m.read).length;
        const navBadge = document.getElementById('navMsgBadge');
        const dot = document.getElementById('chatDot');
        const mobBadge = document.getElementById('mobMsgBadge');

        if (navBadge) {
          navBadge.textContent = unreadCount;
          navBadge.classList.toggle('hidden', unreadCount === 0);
          navBadge.classList.toggle('flex', unreadCount > 0);
        }
        if (dot) dot.classList.toggle('hidden', unreadCount === 0);
        if (mobBadge) mobBadge.classList.toggle('hidden', unreadCount === 0);
      }

      /* ----------------------------------------------------
       * FEED & POSTS
       * --------------------------------------------------- */
      renderFeedView() {
        const container = document.getElementById('view-feed');
        if (!container) return;

        let filtered = this.posts.filter(p => !p.removed);

        if (this.activePostCategory !== 'All') {
          filtered = filtered.filter(p => p.category === this.activePostCategory);
        }

        if (this.searchQuery) {
          filtered = filtered.filter(p =>
            p.content.toLowerCase().includes(this.searchQuery) ||
            p.category.toLowerCase().includes(this.searchQuery) ||
            p.neighborhood.toLowerCase().includes(this.searchQuery) ||
            p.authorName.toLowerCase().includes(this.searchQuery)
          );
        }

        const categories = ['All', 'Announcements', 'Recommendations', 'Lost & Found', 'Local News'];

        container.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-8 space-y-5">
              
              <!-- Post Creator Box -->
              <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 dark:border-slate-800">
                ${this.currentUser ? `
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <img src="${this.currentUser.avatar}" class="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700">
                      <div>
                        <h4 class="font-display font-semibold text-sm text-slate-900 dark:text-white">${this.currentUser.name}</h4>
                        <p class="text-xs text-slate-400">Posting to <span class="text-brand-600 dark:text-brand-400 font-medium">🏡 ${this.currentUser.neighborhood}</span></p>
                      </div>
                    </div>
                    <button onclick="app.openEditProfileModal()" class="text-xs text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                      Edit Profile
                    </button>
                  </div>

                  <form onsubmit="app.handleCreatePost(event)">
                    <textarea id="postContentInput" rows="3" required
                      placeholder="Share recommendations, report lost pets, or post safety notices for neighbors..." 
                      class="w-full text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-brand-500 outline-none resize-none transition-all"></textarea>
                    
                    <div class="mt-2.5 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div class="flex flex-wrap items-center gap-2">
                        <select id="postCategorySelect" class="text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200 outline-none">
                          <option value="Recommendations">⭐ Recommendations</option>
                          <option value="Lost & Found">🐾 Lost & Found</option>
                          <option value="Local News">📢 Local News</option>
                          <option value="Announcements">📌 Announcements</option>
                        </select>

                        <button type="button" onclick="app.promptImageUrl()" class="text-xs text-slate-600 dark:text-slate-300 hover:text-brand-600 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span>Attach Photo</span>
                        </button>
                      </div>

                      <button type="submit" class="px-5 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:scale-95 rounded-xl shadow-md shadow-brand-500/20 transition-all">
                        Post to Neighbors
                      </button>
                    </div>
                    <input type="hidden" id="attachedImageUrl" value="">
                    <div id="imagePreviewContainer" class="hidden mt-2 relative inline-block">
                      <img id="imagePreviewImg" class="h-20 w-auto rounded-lg object-cover border border-slate-200 dark:border-slate-700">
                      <button type="button" onclick="app.removeAttachedImage()" class="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full p-1 text-[10px] leading-none">&times;</button>
                    </div>
                  </form>
                ` : `
                  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 text-lg">
                        👤
                      </div>
                      <div>
                        <h4 class="font-display font-bold text-sm text-slate-900 dark:text-white">Browsing as Guest</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Sign in or register a profile to share updates and chat with neighbors.</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                      <button onclick="app.openAuthModal('signup')" class="flex-1 sm:flex-none px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-500/20 transition-all">
                        Create Account
                      </button>
                      <button onclick="app.openAuthModal('login')" class="flex-1 sm:flex-none px-3.5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                        Sign In
                      </button>
                    </div>
                  </div>
                `}
              </div>

              <!-- Topic Chips -->
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                ${categories.map(cat => `
                  <button onclick="app.setPostCategoryFilter('${cat}')" class="px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${this.activePostCategory === cat ? 'bg-brand-600 text-white shadow-xs' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    ${cat}
                  </button>
                `).join('')}
              </div>

              <!-- Post Cards Feed -->
              <div class="space-y-4">
                ${filtered.length === 0 ? `
                  <div class="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-800 text-slate-400">
                    <p class="text-3xl mb-2">💬</p>
                    <p class="font-semibold text-slate-700 dark:text-slate-200">No posts in this category</p>
                  </div>
                ` : filtered.map(post => this.renderPostCard(post)).join('')}
              </div>
            </div>

            <!-- Right Column Widgets -->
            <div class="lg:col-span-4 space-y-5">
              
              <!-- Resident Card -->
              <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
                ${this.currentUser ? `
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                      <img src="${this.currentUser.avatar}" class="w-12 h-12 rounded-full object-cover border-2 border-brand-500 shadow-xs">
                      <div>
                        <h4 class="font-display font-bold text-base text-slate-900 dark:text-white leading-tight">${this.currentUser.name}</h4>
                        <p class="text-xs text-brand-600 dark:text-brand-400 font-medium">🏡 ${this.currentUser.neighborhood}</p>
                        <span class="badge-pill bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 mt-1">Verified Resident</span>
                      </div>
                    </div>
                    <button onclick="app.openEditProfileModal()" title="Edit Profile" class="p-2 text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </button>
                  </div>
                  ${this.currentUser.bio ? `
                    <p class="text-xs text-slate-600 dark:text-slate-300 mt-3 border-t border-slate-100 dark:border-slate-800 pt-2.5 leading-relaxed">${this.currentUser.bio}</p>
                  ` : ''}
                  <div class="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                    <button onclick="app.handleNewEventClick()" class="flex-1 py-1.5 bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-xl border border-brand-200/50 dark:border-brand-800/50 transition-colors">
                      + Host Event
                    </button>
                    <button onclick="app.openNewChatModal()" class="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1">
                      <span>💬</span> Chat
                    </button>
                  </div>
                ` : `
                  <div class="text-center py-2">
                    <div class="w-14 h-14 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-2 text-slate-500">
                      👤
                    </div>
                    <h4 class="font-display font-bold text-base text-slate-900 dark:text-white">Guest Resident</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">You are currently viewing Oakridge public channels as a guest.</p>
                    <div class="mt-4 flex flex-col gap-2">
                      <button onclick="app.openAuthModal('signup')" class="w-full py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold shadow-md shadow-brand-500/20 transition-all">
                        Create Your Resident Profile
                      </button>
                      <button onclick="app.openAuthModal('login')" class="w-full py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                        Sign In
                      </button>
                    </div>
                  </div>
                `}
              </div>

              <!-- Neighbors Quick Chat Directory Widget -->
              <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-display font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Neighbors to Message</h4>
                  <button onclick="app.openNewChatModal()" class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">All</button>
                </div>
                <div class="space-y-2">
                  ${this.users.filter(u => !this.currentUser || u.id !== this.currentUser.id).slice(0, 3).map(u => `
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <div class="flex items-center gap-2.5 min-w-0">
                        <img src="${u.avatar}" class="w-8 h-8 rounded-full object-cover">
                        <div class="truncate">
                          <h5 class="font-bold text-slate-800 dark:text-slate-200 truncate">${u.name}</h5>
                          <span class="text-[10px] text-slate-400 block truncate">🏡 ${u.neighborhood}</span>
                        </div>
                      </div>
                      <button onclick="app.startDirectChatWith('${u.id}')" class="px-2.5 py-1 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-[11px] font-semibold shrink-0">
                        Message
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Upcoming Events Widget -->
              <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-display font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Upcoming Events</h4>
                  <button onclick="app.handleNewEventClick()" class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">+ Host</button>
                </div>
                <div class="space-y-2">
                  ${this.events.slice(0, 2).map(ev => `
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
                      <span class="text-[10px] font-bold text-brand-600 dark:text-brand-400 block">${ev.dateStr}</span>
                      <h5 class="font-bold text-slate-800 dark:text-slate-200 truncate mt-0.5">${ev.title}</h5>
                      <span class="text-[10px] text-slate-400">📍 ${ev.location}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

            </div>
          </div>
        `;
      }

      renderPostCard(post) {
        const author = this.users.find(u => u.id === post.authorId) || { name: post.authorName, neighborhood: post.neighborhood, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' };
        const hasLiked = this.currentUser && post.likes.includes(this.currentUser.id);

        return `
          <article class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-all">
            <div class="p-4 sm:p-5 pb-3 flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <img src="${author.avatar}" class="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700">
                <div>
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-display font-bold text-sm text-slate-900 dark:text-white">${author.name}</span>
                    ${author.role === 'admin' ? '<span class="badge-pill bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">Admin</span>' : ''}
                    <span class="text-xs text-slate-400">• ${post.createdAt}</span>
                  </div>
                  <div class="flex items-center gap-2 mt-0.5">
                    <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">🏡 ${post.neighborhood}</span>
                    <span class="badge-pill bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">${post.category}</span>
                  </div>
                </div>
              </div>

              <!-- Message Author / Flag Buttons -->
              <div class="flex items-center gap-1">
                ${(!this.currentUser || post.authorId !== this.currentUser.id) ? `
                  <button onclick="app.startDirectChatWith('${post.authorId}')" title="Message ${author.name}" class="px-2.5 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 dark:hover:bg-brand-900/50 rounded-lg transition-colors flex items-center gap-1">
                    <span>💬</span> Message
                  </button>
                ` : ''}
                <button onclick="app.openReportModal('${post.id}')" title="Flag post" class="p-1.5 text-slate-400 hover:text-red-600 rounded-lg">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </button>
              </div>
            </div>

            <div class="px-4 sm:px-5 py-2">
              <p class="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">${post.content}</p>
            </div>

            ${post.image ? `
              <div class="mt-3 bg-slate-100 dark:bg-slate-800 max-h-96 overflow-hidden">
                <img src="${post.image}" alt="Community attachment" class="w-full h-auto object-cover max-h-96">
              </div>
            ` : ''}

            <div class="px-4 sm:px-5 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div class="flex items-center gap-4">
                <button onclick="app.toggleLikePost('${post.id}')" class="flex items-center gap-1.5 font-semibold ${hasLiked ? 'text-red-500' : 'hover:text-red-500'}">
                  <svg class="w-4 h-4 ${hasLiked ? 'fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  <span>${post.likes.length} Likes</span>
                </button>
                <button onclick="app.toggleCommentBox('${post.id}')" class="flex items-center gap-1.5 font-semibold hover:text-brand-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <span>${post.comments.length} Comments</span>
                </button>
              </div>
            </div>

            <!-- Comment List -->
            <div id="comments-${post.id}" class="bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 p-4">
              <div class="space-y-2 mb-3">
                ${post.comments.map(c => `
                  <div class="flex items-start gap-2 text-xs">
                    <div class="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-[10px] mt-0.5">👤</div>
                    <div class="flex-1 bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div class="flex items-center justify-between mb-0.5">
                        <span class="font-bold text-slate-800 dark:text-slate-100">${c.authorName}</span>
                        ${c.authorId ? `
                          <button onclick="app.startDirectChatWith('${c.authorId}')" class="text-[10px] font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                            Message
                          </button>
                        ` : ''}
                      </div>
                      <p class="text-slate-600 dark:text-slate-300">${c.text}</p>
                    </div>
                  </div>
                `).join('')}
              </div>

              ${this.currentUser ? `
                <form onsubmit="app.handleAddComment(event, '${post.id}')" class="flex gap-2">
                  <input type="text" id="comment-input-${post.id}" placeholder="Write a reply..." required
                         class="flex-1 text-xs px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-brand-500 text-slate-800 dark:text-slate-100">
                  <button type="submit" class="px-3 py-1 bg-brand-600 text-white rounded-full text-xs font-semibold">Reply</button>
                </form>
              ` : `
                <div class="p-2 text-center bg-white dark:bg-slate-800/80 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Browsing as Guest. </span>
                  <button onclick="app.openAuthModal('signup')" class="text-brand-600 dark:text-brand-400 font-bold hover:underline">Create account</button>
                  <span> or </span>
                  <button onclick="app.openAuthModal('login')" class="text-brand-600 dark:text-brand-400 font-bold hover:underline">Sign in</button>
                  <span> to join the discussion.</span>
                </div>
              `}
            </div>
          </article>
        `;
      }

      setPostCategoryFilter(cat) {
        this.activePostCategory = cat;
        this.renderFeedView();
      }

      promptImageUrl() {
        const url = prompt("Enter an image URL for your post:", "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000");
        if (url && url.trim().length > 5) {
          document.getElementById('attachedImageUrl').value = url.trim();
          document.getElementById('imagePreviewImg').src = url.trim();
          document.getElementById('imagePreviewContainer').classList.remove('hidden');
        }
      }

      removeAttachedImage() {
        document.getElementById('attachedImageUrl').value = '';
        document.getElementById('imagePreviewContainer').classList.add('hidden');
      }

      handleCreatePost(e) {
        e.preventDefault();
        if (!this.requireAuth('create and publish posts')) return;

        const content = document.getElementById('postContentInput').value.trim();
        const category = document.getElementById('postCategorySelect').value;
        const image = document.getElementById('attachedImageUrl').value;

        if (!content) return;

        const newPost = {
          id: 'post-' + Date.now(),
          authorId: this.currentUser.id,
          authorName: this.currentUser.name,
          category,
          neighborhood: this.currentUser.neighborhood,
          content,
          image: image || null,
          createdAt: 'Just now',
          likes: [],
          reported: false,
          comments: []
        };

        this.posts.unshift(newPost);
        this.saveState();
        this.renderFeedView();
        this.showToast('Post shared with Oakridge neighbors!', 'success');
      }

      toggleLikePost(postId) {
        if (!this.requireAuth('like or react to posts')) return;

        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const idx = post.likes.indexOf(this.currentUser.id);
        if (idx > -1) {
          post.likes.splice(idx, 1);
        } else {
          post.likes.push(this.currentUser.id);
        }

        this.saveState();
        this.renderFeedView();
      }

      toggleCommentBox(postId) {
        const el = document.getElementById(`comments-${postId}`);
        if (el) el.classList.toggle('hidden');
      }

      handleAddComment(e, postId) {
        e.preventDefault();
        if (!this.requireAuth('leave comments')) return;

        const input = document.getElementById(`comment-input-${postId}`);
        const text = input.value.trim();
        if (!text) return;

        const post = this.posts.find(p => p.id === postId);
        if (post) {
          post.comments.push({
            id: 'c-' + Date.now(),
            authorId: this.currentUser.id,
            authorName: this.currentUser.name,
            text,
            createdAt: 'Just now'
          });
          this.saveState();
          this.renderFeedView();
        }
      }

      /* ----------------------------------------------------
       * EVENTS & RSVP
       * --------------------------------------------------- */
      renderEventsView() {
        const container = document.getElementById('view-events');
        if (!container) return;

        let filtered = [...this.events];
        if (this.activeEventFilter !== 'All') {
          filtered = filtered.filter(e => e.category === this.activeEventFilter);
        }
        if (this.searchQuery) {
          filtered = filtered.filter(e => 
            e.title.toLowerCase().includes(this.searchQuery) || 
            e.location.toLowerCase().includes(this.searchQuery) ||
            e.description.toLowerCase().includes(this.searchQuery)
          );
        }

        const categories = ['All', 'Cleanups', 'Festivals', 'Workshops', 'Yard Sale', 'Sports', 'Kids & Family'];

        container.innerHTML = `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-emerald-600 via-teal-700 to-brand-800 rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span class="px-2.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">Local Gatherings</span>
                <h2 class="font-display font-extrabold text-2xl sm:text-3xl mt-2 tracking-tight">Oakridge Community Calendar</h2>
                <p class="text-sm text-emerald-100 mt-1 max-w-xl">Volunteer days, harvest festivals, workshops, and street yard sales.</p>
                <div class="mt-4 flex flex-wrap gap-1.5">
                  ${categories.map(cat => `
                    <button onclick="app.setEventFilter('${cat}')" class="px-3 py-1 rounded-xl text-xs font-bold transition-all ${this.activeEventFilter === cat ? 'bg-white text-emerald-800 shadow-xs' : 'bg-white/10 hover:bg-white/20 text-white'}">
                      ${cat}
                    </button>
                  `).join('')}
                </div>
              </div>
              <div class="shrink-0">
                <button onclick="app.handleNewEventClick()" class="px-5 py-3 rounded-2xl bg-white text-brand-800 font-extrabold text-sm shadow-lg hover:bg-emerald-50 active:scale-95 transition-all flex items-center gap-2">
                  <span class="text-base">📅</span> + Host an Event
                </button>
              </div>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${filtered.length === 0 ? `
                <div class="col-span-full bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 text-slate-400">
                  <p class="text-4xl mb-2">🎈</p>
                  <p class="font-bold text-slate-700 dark:text-slate-200 text-base">No upcoming events found</p>
                  <button onclick="app.handleNewEventClick()" class="mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold">
                    + Host an Event
                  </button>
                </div>
              ` : filtered.map(ev => {
                const isRsvp = this.currentUser && ev.attendees.includes(this.currentUser.id);
                const isOrganizer = this.currentUser && ev.organizerId === this.currentUser.id;
                const isFull = ev.capacity && ev.attendees.length >= ev.capacity;

                return `
                  <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md">
                    <div>
                      <div class="h-44 relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <img src="${ev.image}" class="w-full h-full object-cover">
                        <div class="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/90 px-3 py-1 rounded-xl text-center shadow-md">
                          <span class="block text-[9px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">${ev.dateStr.split('•')[0] || 'Upcoming'}</span>
                        </div>
                        <span class="absolute top-3 right-3 badge-pill bg-slate-900/80 backdrop-blur-xs text-white">${ev.category}</span>
                      </div>
                      <div class="p-4">
                        <span class="text-xs text-brand-600 dark:text-brand-400 font-semibold block">⏰ ${ev.dateStr}</span>
                        <h3 class="font-display font-bold text-base text-slate-900 dark:text-white mt-1 leading-snug">${ev.title}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">📍 ${ev.location}</p>
                        <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                          <span class="text-slate-500 dark:text-slate-400">Host: <span class="font-bold text-slate-700 dark:text-slate-300">${ev.organizer}</span></span>
                          ${(!this.currentUser || ev.organizerId !== this.currentUser.id) ? `
                            <button onclick="app.startDirectChatWith('${ev.organizerId}')" class="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                              Message Host
                            </button>
                          ` : '<span class="text-[10px] text-brand-600 font-bold">(You)</span>'}
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">${ev.description}</p>
                      </div>
                    </div>
                    <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div class="text-xs text-slate-500 dark:text-slate-400">
                        <span class="font-bold text-slate-700 dark:text-slate-200">👥 ${ev.attendees.length}</span>
                        <span>${ev.capacity ? ` / ${ev.capacity}` : ''} Attending</span>
                      </div>
                      <button onclick="app.toggleEventRsvp('${ev.id}')" 
                              class="px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${isRsvp ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : isFull ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'}">
                        ${isRsvp ? '✓ Attending' : isFull ? 'Event Full' : 'RSVP Now'}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      setEventFilter(cat) {
        this.activeEventFilter = cat;
        this.renderEventsView();
      }

      toggleEventRsvp(eventId) {
        if (!this.requireAuth('RSVP or register for events')) return;

        const ev = this.events.find(e => e.id === eventId);
        if (!ev) return;

        const idx = ev.attendees.indexOf(this.currentUser.id);
        if (idx > -1) {
          ev.attendees.splice(idx, 1);
          this.showToast(`Canceled RSVP for "${ev.title}"`, 'info');
        } else {
          if (ev.capacity && ev.attendees.length >= ev.capacity) {
            this.showToast('Sorry, this event has reached capacity!', 'error');
            return;
          }
          ev.attendees.push(this.currentUser.id);
          this.showToast(`RSVP confirmed for "${ev.title}"!`, 'success');
        }
        this.saveState();
        this.renderEventsView();
      }

      handleNewEventClick() {
        if (!this.requireAuth('host a community event')) return;
        this.openCreateEventModal();
      }

      openCreateEventModal() {
        document.getElementById('createEventModal').classList.remove('hidden');
      }

      closeCreateEventModal() {
        document.getElementById('createEventModal').classList.add('hidden');
      }

      setEventCoverPreset(url) {
        document.getElementById('evCoverInput').value = url;
        this.showToast('Cover photo preset chosen!', 'info');
      }

      handleCreateEvent(e) {
        e.preventDefault();
        if (!this.requireAuth('host an event')) return;

        const title = document.getElementById('evTitleInput').value.trim();
        const category = document.getElementById('evCategoryInput').value;
        const dateStr = document.getElementById('evDateInput').value.trim();
        const location = document.getElementById('evLocationInput').value.trim();
        const capacityVal = document.getElementById('evCapacityInput').value;
        const description = document.getElementById('evDescInput').value.trim();
        let cover = document.getElementById('evCoverInput').value.trim();

        if (!cover) {
          cover = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80';
        }

        const newEvent = {
          id: 'ev-' + Date.now(),
          title,
          category,
          dateStr,
          location,
          organizer: this.currentUser.name,
          organizerId: this.currentUser.id,
          description,
          image: cover,
          attendees: [this.currentUser.id],
          capacity: capacityVal ? parseInt(capacityVal, 10) : null
        };

        this.events.unshift(newEvent);

        this.posts.unshift({
          id: 'post-' + Date.now(),
          authorId: this.currentUser.id,
          authorName: this.currentUser.name,
          category: 'Announcements',
          neighborhood: this.currentUser.neighborhood,
          content: `📅 New Event Hosted: "${title}" on ${dateStr} at ${location}. RSVP to join us!`,
          image: cover,
          createdAt: 'Just now',
          likes: [],
          reported: false,
          comments: []
        });

        this.saveState();
        this.closeCreateEventModal();
        this.renderAll();
        this.navigate('events');
        this.showToast(`Event "${title}" published and listed!`, 'success');
      }

      /* ----------------------------------------------------
       * COMMUNITIES
       * --------------------------------------------------- */
      renderCommunitiesView() {
        const container = document.getElementById('view-communities');
        if (!container) return;

        let list = [...this.communities];
        if (this.searchQuery) {
          list = list.filter(c => c.name.toLowerCase().includes(this.searchQuery) || c.category.toLowerCase().includes(this.searchQuery));
        }

        container.innerHTML = `
          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div>
                <h2 class="font-display font-extrabold text-2xl text-slate-900 dark:text-white">Neighborhood Communities & Guilds</h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Connect with neighbors who share specific passions, goals, and blocks.</p>
              </div>
              <button onclick="app.handleNewCommunityClick()" class="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5 self-start sm:self-auto">
                <span>+</span> Create Community
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${list.map(c => {
                const isMember = this.currentUser && c.members.includes(this.currentUser.id);
                return `
                  <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs flex flex-col justify-between">
                    <div>
                      <div class="h-36 relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <img src="${c.cover}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                        <div class="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                          <span class="text-2xl">${c.icon}</span>
                          <div>
                            <h3 class="font-display font-bold text-base leading-tight">${c.name}</h3>
                            <span class="text-[10px] text-slate-300">📍 ${c.neighborhood}</span>
                          </div>
                        </div>
                      </div>
                      <div class="p-4">
                        <span class="badge-pill bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold mb-2">${c.category}</span>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">${c.description}</p>
                      </div>
                    </div>
                    <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span class="text-xs text-slate-500 dark:text-slate-400">👥 ${c.members.length} Neighbors</span>
                      <button onclick="app.toggleJoinCommunity('${c.id}')" class="px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${isMember ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'bg-brand-600 hover:bg-brand-700 text-white'}">
                        ${isMember ? 'Joined ✓' : 'Join'}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      handleNewCommunityClick() {
        if (!this.requireAuth('create and launch a new community')) return;
        this.openCreateCommunityModal();
      }

      openCreateCommunityModal() {
        document.getElementById('createCommunityModal').classList.remove('hidden');
      }

      closeCreateCommunityModal() {
        document.getElementById('createCommunityModal').classList.add('hidden');
      }

      handleCreateCommunity(e) {
        e.preventDefault();
        if (!this.requireAuth('launch communities')) return;

        const name = document.getElementById('commNameInput').value.trim();
        const category = document.getElementById('commCategoryInput').value;
        const neighborhood = document.getElementById('commNeighborhoodInput').value.trim() || this.currentUser.neighborhood;
        const description = document.getElementById('commDescInput').value.trim();
        let cover = document.getElementById('commCoverInput').value.trim();

        if (!cover) {
          cover = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80';
        }

        const icons = {
          'Hobbies & Gardening': '🌱',
          'Public Safety': '🛡️',
          'Food & Culinary': '🥖',
          'Outdoors & Fitness': '🐕',
          'Parents & Families': '🍼',
          'Arts & Books': '📚',
          'Civic Improvement': '🏛️'
        };

        const newComm = {
          id: 'comm-' + Date.now(),
          name,
          category,
          neighborhood,
          description,
          cover,
          icon: icons[category] || '👥',
          members: [this.currentUser.id]
        };

        this.communities.unshift(newComm);
        this.saveState();
        this.closeCreateCommunityModal();
        this.renderCommunitiesView();
        this.showToast(`Community "${name}" launched!`, 'success');
      }

      toggleJoinCommunity(commId) {
        if (!this.requireAuth('join neighborhood circles')) return;

        const comm = this.communities.find(c => c.id === commId);
        if (!comm) return;

        const idx = comm.members.indexOf(this.currentUser.id);
        if (idx > -1) {
          comm.members.splice(idx, 1);
          this.showToast(`Left ${comm.name}`, 'info');
        } else {
          comm.members.push(this.currentUser.id);
          this.showToast(`Joined ${comm.name}!`, 'success');
        }

        this.saveState();
        this.renderCommunitiesView();
      }

      /* ----------------------------------------------------
       * ADMIN MODERATION
       * --------------------------------------------------- */
      renderAdminView() {
        const container = document.getElementById('view-admin');
        if (!container) return;

        const reported = this.posts.filter(p => p.reported && !p.removed);

        container.innerHTML = `
          <div class="space-y-6">
            <div class="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex items-center justify-between">
              <div>
                <span class="badge-pill bg-amber-500/20 text-amber-300 border border-amber-400/30">Community Moderation</span>
                <h2 class="font-display font-extrabold text-2xl sm:text-3xl mt-1.5">Oakridge Civic Safety Desk</h2>
                <p class="text-xs text-slate-400 mt-1">Audit flagged posts and enforce neighborly conduct guidelines.</p>
              </div>
              <div class="bg-slate-800 p-4 rounded-2xl text-center">
                <span class="text-2xl font-black text-amber-400">${reported.length}</span>
                <span class="block text-[10px] text-slate-400 uppercase font-bold">Pending</span>
              </div>
            </div>

            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div class="p-4 border-b border-slate-100 dark:border-slate-800 font-bold text-sm text-slate-800 dark:text-white">Flagged Content Queue</div>
              ${reported.length === 0 ? `
                <div class="p-10 text-center text-slate-400 text-xs">
                  <p class="text-2xl mb-1">🎉</p>
                  No flagged posts in Oakridge Village.
                </div>
              ` : `
                <div class="divide-y divide-slate-100 dark:divide-slate-800">
                  ${reported.map(p => `
                    <div class="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span class="badge-pill bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300">Flag: ${p.reportReason || 'Reported by neighbor'}</span>
                        <p class="text-xs text-slate-700 dark:text-slate-300 mt-2">${p.content}</p>
                      </div>
                      <div class="flex items-center gap-2">
                        <button onclick="app.dismissReport('${p.id}')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-lg">Dismiss</button>
                        <button onclick="app.removeReportedPost('${p.id}')" class="px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg">Remove Post</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          </div>
        `;
      }

      openReportModal(postId) {
        this.reportingPostId = postId;
        document.getElementById('reportModal').classList.remove('hidden');
      }

      closeReportModal() {
        this.reportingPostId = null;
        document.getElementById('reportModal').classList.add('hidden');
      }

      submitReport() {
        const post = this.posts.find(p => p.id === this.reportingPostId);
        if (post) {
          const reason = document.querySelector('input[name="reportReason"]:checked')?.value || 'Flagged by resident';
          post.reported = true;
          post.reportReason = reason;
          this.saveState();
          this.showToast('Post sent to village moderators', 'info');
          this.updateAuthNav();
        }
        this.closeReportModal();
      }

      dismissReport(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
          post.reported = false;
          this.saveState();
          this.renderAdminView();
          this.updateAuthNav();
          this.showToast('Flag dismissed', 'info');
        }
      }

      removeReportedPost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
          post.removed = true;
          this.saveState();
          this.renderAdminView();
          this.updateAuthNav();
          this.showToast('Post removed', 'error');
        }
      }

      /* ----------------------------------------------------
       * NOTIFICATIONS
       * --------------------------------------------------- */
      toggleNotificationsDrawer() {
        const drawer = document.getElementById('notificationDrawer');
        const backdrop = document.getElementById('notificationBackdrop');
        const isOpen = !drawer.classList.contains('translate-x-full');

        if (isOpen) {
          drawer.classList.add('translate-x-full');
          backdrop.classList.add('hidden');
        } else {
          drawer.classList.remove('translate-x-full');
          backdrop.classList.remove('hidden');
          this.renderNotificationsList();
        }
      }

      renderNotificationsList() {
        const listEl = document.getElementById('notificationList');
        if (!listEl) return;

        listEl.innerHTML = this.notifications.map(n => `
          <div class="p-3 text-xs flex items-start gap-2.5 ${n.read ? 'opacity-60' : 'bg-brand-50/50 dark:bg-brand-950/20 font-semibold'}">
            <span class="text-xl">${n.icon}</span>
            <div class="flex-1">
              <p class="text-slate-800 dark:text-slate-100">${n.title}</p>
              <p class="text-slate-500 dark:text-slate-400 text-[11px] font-normal">${n.body}</p>
            </div>
            <span class="text-[9px] text-slate-400">${n.time}</span>
          </div>
        `).join('');

        this.updateNotificationBadges();
      }

      markAllNotificationsRead() {
        this.notifications.forEach(n => n.read = true);
        this.saveState();
        this.renderNotificationsList();
      }

      updateNotificationBadges() {
        const unread = this.notifications.filter(n => !n.read).length;
        const badge = document.getElementById('notifBadge');
        const drawer = document.getElementById('drawerUnreadCount');
        if (badge) {
          badge.textContent = unread;
          badge.classList.toggle('hidden', unread === 0);
        }
        if (drawer) drawer.textContent = `${unread} new`;
      }

      showToast(msg, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-xl flex items-center gap-2 pointer-events-auto transition-all ${type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-red-600' : 'bg-slate-800'}`;
        toast.innerHTML = `<span>${type === 'success' ? '✓' : 'ℹ️'}</span><span>${msg}</span>`;

        container.appendChild(toast);
        setTimeout(() => {
          toast.classList.add('opacity-0');
          setTimeout(() => toast.remove(), 200);
        }, 2600);
      }
    }

    const app = new HometownApp();
    window.app = app;
    window.addEventListener('DOMContentLoaded', () => app.init());
