/**
 * Centralized tracking utility for GA4 and Meta Pixel events
 * Tracks conversion events for calls, bookings, and 3rd-party takeout orders
 */

/**
 * Check if gtag is available
 * @returns {boolean}
 */
const isGtagAvailable = () => {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Check if Meta Pixel is available
 * @returns {boolean}
 */
const isFbqAvailable = () => {
    return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

/**
 * Track phone call clicks
 * @param {string} location - Where the call link was clicked (e.g., 'footer', 'home_cta', 'menu_sticky_cta')
 */
export const trackCallClick = (location) => {
    if (isGtagAvailable()) {
        window.gtag('event', 'call_click', {
            event_category: 'engagement',
            event_label: 'phone_call',
            phone_number: '18073430001',
            location: location
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'Contact', {
            content_name: 'Phone Call Click',
            content_category: 'Call'
        });
    }

    console.log('[Tracking] Call click:', location);
};

/**
 * Track booking initiation
 * @param {string} location - Where the booking was started (e.g., 'home_hero', 'home_cta', 'direct_page_visit')
 */
export const trackBookingStart = (location) => {
    // Prevent duplicate events in the same session
    const sessionKey = 'booking_start_fired';
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(sessionKey)) {
        console.log('[Tracking] Booking start already fired this session');
        return;
    }

    if (isGtagAvailable()) {
        window.gtag('event', 'booking_start', {
            event_category: 'conversion',
            event_label: 'table_reservation',
            location: location
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'InitiateCheckout', {
            content_name: 'Table Booking',
            content_category: 'Reservation'
        });
    }

    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(sessionKey, 'true');
    }

    console.log('[Tracking] Booking start:', location);
};

/**
 * Track booking submission (if available via widget callback)
 * @param {Object} data - Booking data (optional)
 * @param {number} data.party_size - Number of guests
 * @param {string} data.booking_date - Date of reservation
 */
export const trackBookingSubmit = (data = {}) => {
    if (isGtagAvailable()) {
        window.gtag('event', 'booking_submit', {
            event_category: 'conversion',
            event_label: 'table_reservation_complete',
            party_size: data.party_size || undefined,
            booking_date: data.booking_date || undefined
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'Purchase', {
            content_name: 'Table Booking Confirmed',
            content_category: 'Reservation',
            value: 0,
            currency: 'CAD'
        });
    }

    console.log('[Tracking] Booking submit:', data);
};

/**
 * Track 3rd-party takeout order clicks
 * @param {string} service - Service name ('ubereats' or 'skipthedishes')
 * @param {string} orderType - Order type ('pickup' or 'delivery')
 * @param {string} location - Where the link was clicked (e.g., 'home_page', 'order_page', 'menu_sticky_cta')
 * @param {string} linkUrl - Full URL of the 3rd-party service
 */
export const trackTakeoutClick = (service, orderType, location, linkUrl = '') => {
    const eventName = service === 'ubereats' ? 'takeout_click_ubereats' : 'takeout_click_skip';

    if (isGtagAvailable()) {
        window.gtag('event', eventName, {
            event_category: 'conversion',
            event_label: 'online_ordering',
            service: service,
            order_type: orderType,
            location: location,
            link_url: linkUrl
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'AddToCart', {
            content_name: `${service === 'ubereats' ? 'Uber Eats' : 'SkipTheDishes'} Order Intent`,
            content_category: 'Takeout'
        });
    }

    console.log('[Tracking] Takeout click:', { service, orderType, location });
};

/**
 * Track menu page views
 */
export const trackMenuView = () => {
    if (isGtagAvailable()) {
        window.gtag('event', 'view_menu', {
            event_category: 'engagement',
            event_label: 'menu_interaction'
        });
    }

    console.log('[Tracking] Menu view');
};

/**
 * Track order page views
 */
export const trackOrderPageView = () => {
    if (isGtagAvailable()) {
        window.gtag('event', 'view_order_page', {
            event_category: 'engagement',
            event_label: 'order_page_interaction'
        });
    }

    console.log('[Tracking] Order page view');
};

/**
 * Track VIP/Birthday Club signups
 */
export const trackVIPSignup = () => {
    if (isGtagAvailable()) {
        window.gtag('event', 'vip_signup', {
            event_category: 'conversion',
            event_label: 'email_signup',
            signup_type: 'vip_club'
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'Lead', {
            content_name: 'VIP Club Signup',
            content_category: 'Email List'
        });
    }

    console.log('[Tracking] VIP signup');
};

/**
 * Track private event inquiries
 */
export const trackEventInquiry = () => {
    if (isGtagAvailable()) {
        window.gtag('event', 'event_inquiry', {
            event_category: 'conversion',
            event_label: 'private_events',
            inquiry_type: 'private_event'
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'Lead', {
            content_name: 'Private Event Inquiry',
            content_category: 'Events'
        });
    }

    console.log('[Tracking] Event inquiry');
};

/**
 * Track newsletter signups (bonus event)
 */
export const trackNewsletterSignup = () => {
    if (isGtagAvailable()) {
        window.gtag('event', 'newsletter_signup', {
            event_category: 'conversion',
            event_label: 'email_signup',
            signup_type: 'newsletter'
        });
    }

    if (isFbqAvailable()) {
        window.fbq('track', 'Lead', {
            content_name: 'Newsletter Signup',
            content_category: 'Email List'
        });
    }

    console.log('[Tracking] Newsletter signup');
};
