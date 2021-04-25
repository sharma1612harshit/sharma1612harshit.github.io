function dateDiff(date1, date2) {
    var date1 = new Date(2000, 0, 1,  9, 0); // 9:00 AM
    var date2 = new Date(2000, 0, 1, 17, 0); // 5:00 PM

    if (date2 < date1) {
        date2.setDate(date2.getDate() + 1);
    }

    var diff = date2 - date1;

    return diff
}