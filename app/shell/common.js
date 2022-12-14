// prototypes
Date.prototype.isLeapYear = function () {
    let year = this.getFullYear();
    if ((year & 3) != 0) return false;

    if ((year % 4 != 0) || ((year % 100 == 0) || (year % 400 == 0)))
        return false;

    return true;
};

Date.prototype.getDayOfYear = function () {
    let dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let dayCountLeap = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    let mn = this.getMonth();
    let dn = this.getDate();
    let dayOfYear = this.isLeapYear() ? dayCountLeap[mn] + dn : dayCount[mn] + dn;
    return dayOfYear;
};

String.prototype.toPersianDigit = function (e) {
    return this.replace(/\d+/g, function (t) {
        let n = [],
            r = [];
        for (let i = 0; i < t.length; i++) {
            n.push(t.charCodeAt(i))
        }
        for (let s = 0; s < n.length; s++) {
            r.push(String.fromCharCode(n[s] + (!!e && e == true ? 1584 : 1728)))
        }
        return r.join("")
    })
};



//date functions
let GregorianToHijri = (date) => {
    let dayOfYear = date.getDayOfYear();
    let gYear = date.getFullYear();
    let diifDaysBetweenHijriAndGeorgie = 79;
    let firstSixMonth = 31 * 6;
    let isInFirstSixMonth = false;

    //result
    let month = 0;
    let day = 0;
    let year = 0;


    if (dayOfYear > diifDaysBetweenHijriAndGeorgie) { //after farvardin
        //if the dayOfYear is 79 then firstOFFarvardin else days after firstOfFarvardin
        let dayOfHijri = dayOfYear - diifDaysBetweenHijriAndGeorgie;
        if (dayOfHijri < firstSixMonth) //day is in first six month
        {
            month = Math.ceil(dayOfHijri / 31);
            day = dayOfHijri % 31 == 0 ? 31 : dayOfHijri % 31;
        } else { //day is in second six month
            let tempDays = dayOfHijri - firstSixMonth;
            month = Math.ceil(tempDays / 30) + 6;
            day = tempDays % 30 == 0 ? 30 : tempDays % 30;
        }
        year = gYear - 621;
    } else { // before farvardin until day
        let tempDate = new Date(date.getTime());
        tempDate.setFullYear(date.getFullYear() - 1);
        let diffDay = tempDate.isLeapYear() ? 11 : 10;
        let dayOfHijri = dayOfYear + diffDay;
        month = Math.ceil(dayOfHijri / 30) + 9;
        day = dayOfHijri % 30 == 0 ? 30 : dayOfHijri % 30;
        year = gYear - 622;
    }

    return {
        dayOfWeek: date.getDay(),
        day: day,
        month: month,
        year: year
    };

};

let FormatHijriDate = (date) => {
    let monthName = ['??????????????', '????????????????', '??????????', '??????', '??????????', '????????????', '??????', '????????', '??????', '????', '????????', '??????????'];
    let dayName = ['????????????', '????????????', '???? ????????', '????????????????', '?????? ????????', '????????', '????????'];

    let month = monthName[date.month - 1];
    let dayOfWeek = dayName[date.dayOfWeek];

    let result = dayOfWeek + ' - ' + date.day + ' ' + month + ' ' + date.year;
    return result;
};


//localize
let getParentLang = (node) => {
    let defaultLang = 'fa';
    let currLang = null;
    while (currLang === null && node.parentNode) {
        if (node.getAttribute && node.getAttribute('lang')) {
            currLang = node.getAttribute('lang');
        }
        node = node.parentNode;
    }
    return currLang || defaultLang;
};


let TraceNodes = (e) => {
    if (e.nodeType == 3 && getParentLang(e) === 'fa') {
        e.nodeValue = e.nodeValue.toPersianDigit();
    } else {
        for (let t = 0; t < e.childNodes.length; t++) {
            TraceNodes(e.childNodes[t]);
        }
    }
};



//sidebar
let ToggleSidebar = (event) => {
	let elem = document.getElementById('sidebar-toggle');
	let children = [].slice.call(elem.children);
	children.forEach(function (value) {
		value.classList.toggle("toggle");
	});
	document.getElementById("sidebar").classList.toggle("toggle-sidebar");
	document.getElementById("header-logo").classList.toggle("toggle-togglebar");
	document.getElementById("main-container").classList.toggle("toggle-main-container");
};



export {
    GregorianToHijri,
    FormatHijriDate,
    TraceNodes,
    ToggleSidebar
};