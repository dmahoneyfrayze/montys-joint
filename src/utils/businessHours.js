export const getBusinessStatus = () => {
    // Monty's Joint is in Thunder Bay (Eastern Time)
    // Mon: 17:00 - 22:00
    // Tue-Fri: 11:30 - 22:00
    // Sat: 12:00 - 22:00
    // Sun: Closed

    const now = new Date();

    // Convert current time to Thunder Bay time (ET)
    const options = { timeZone: 'America/Toronto', hour: 'numeric', minute: 'numeric', hour12: false, weekday: 'long' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);

    const partMap = {};
    parts.forEach(p => partMap[p.type] = p.value);

    const day = partMap.weekday;
    const currentHour = parseInt(partMap.hour, 10);
    const currentMinute = parseInt(partMap.minute, 10);
    const currentTime = currentHour + (currentMinute / 60);

    let isOpen = false;
    let openTime = 0;
    let closeTime = 0;

    switch (day) {
        case 'Monday':
            openTime = 17.0; // 5:00 PM
            closeTime = 22.0; // 10:00 PM
            break;
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            openTime = 11.5; // 11:30 AM
            closeTime = 22.0; // 10:00 PM
            break;
        case 'Saturday':
            openTime = 12.0; // 12:00 PM
            closeTime = 22.0; // 10:00 PM
            break;
        case 'Sunday':
            // Closed
            return { isOpen: false, text: "Closed" };
        default:
            return { isOpen: false, text: "Closed" };
    }

    isOpen = currentTime >= openTime && currentTime < closeTime;

    return {
        isOpen,
        text: isOpen ? "Open Now" : "Closed"
    };
};
