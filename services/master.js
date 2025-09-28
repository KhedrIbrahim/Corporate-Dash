let popUpAddSlot = document.getElementById("popUpAddSlot");
let slotDateInp = document.getElementById("slotDateInp");
let slotTimeInp = document.getElementById("slotTimeInp");
function openAddSlotPopup() {
    popUpAddSlot.classList.add("act");
    boxShadow.classList.add("act");
}

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendarEle');

    // Initialize FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        allDaySlot: false,
        slotMinTime: '08:00:00',
        slotMaxTime: '18:00:00', 
        events: [
            {
                title: 'Event Test',
                start: '2024-09-17T09:00:00',
                end: '2024-09-17T11:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b',
            },
            {
                title: 'Event Test 2',
                start: '2024-09-01T09:00:00',
                end: '2024-09-01T11:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 3',
                start: '2024-09-18T11:00:00',
                end: '2024-09-18T13:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 4',
                start: '2024-09-19T08:00:00',
                end: '2024-09-19T10:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 5',
                start: '2024-09-25T13:00:00',
                end: '2024-09-25T15:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 5',
                start: '2024-09-21T15:00:00',
                end: '2024-09-21T17:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 6',
                start: '2024-09-20T12:45:00',
                end: '2024-09-20T14:45:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 7',
                start: '2024-09-19T15:00:00',
                end: '2024-09-19T17:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 8',
                start: '2024-09-22T08:00:00',
                end: '2024-09-22T10:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 9',
                start: '2024-09-16T15:10:00',
                end: '2024-09-16T17:10:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 10',
                start: '2024-09-03T15:10:00',
                end: '2024-09-03T17:10:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 12',
                start: '2024-09-13T11:00:00',
                end: '2024-09-13T13:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 13',
                start: '2024-09-13T15:00:00',
                end: '2024-09-13T17:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
            {
                title: 'Event Test 13',
                start: '2024-09-15T08:00:00',
                end: '2024-09-15T10:00:00',
                backgroundColor: '#64748b',
                borderColor: '#64748b'
            },
        ],
        dateClick: function(info) {
            openAddSlotPopup();
            // Set the date input value
            let clickedDate = info.dateStr.split("T")[0]; // Get the date part only
            slotDateInp.value = clickedDate;

            // Set the time input value (if there's time in the dateClick event)
            let clickedTime = info.dateStr.split("T")[1]; // Get the time part (if available)
            slotTimeInp.value = clickedTime ? clickedTime.substring(0, 5) : '08:00'; // Default to 08:00 if no time
        },
        eventClick: function(info) {
            showEventDetails(info.event);
        }
    });

    // Render the calendar
    calendar.render();
});

function showEventDetails(event) {
    let popUpEventDetails = document.getElementById("popUpEventDetails");
    let evenTitle = document.getElementById("evenTitle");
    let evenStart = document.getElementById("evenStart");
    let evenEnd = document.getElementById("evenEnd");
    popUpEventDetails.classList.add("act");
    boxShadow.classList.add("act");
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    const startDate = event.start ? event.start.toLocaleString('en-US', options) : 'N/A';
    const endDate = event.end ? event.end.toLocaleString('en-US', options) : 'N/A';
    
    evenTitle.innerText = event.title;
    evenStart.innerText = startDate;
    evenEnd.innerText = endDate;
    // For Event Description (.extendedProps.description)
}

// Add Slot PopUp
// Open PopUp
const btnAddSlot = document.getElementById('btnAddSlot');
btnAddSlot.addEventListener('click', function () {
    const eleId = this.getAttribute('open-ele');
    const Element = document.getElementById(eleId);
    Element.classList.add('act');
    boxShadow.classList.add("act")
});

const btnShowNativeInput = document.querySelectorAll('.btnShowNativeInput');
btnShowNativeInput.forEach(button => {
    button.addEventListener('click', function () {
        const eleId = this.getAttribute('show-picker-id');
        const element = document.getElementById(eleId);
        if(element){
            element.showPicker();
        }
    });
})

// Show/Hide Schedule Detalis
let btnShowHidScheduleDetails = document.getElementById("btnShowHidScheduleDetails");
let boxScheduleDetails = document.getElementById("boxScheduleDetails");

btnShowHidScheduleDetails.addEventListener("click", function(e){
    e.preventDefault();
    boxScheduleDetails.classList.toggle("act")
})