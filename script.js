const students = [
      { rollNumber: '22WJ1A04R7', name: 'SANDYAPAGA RAJU', email: '22WJ1A04R7@gniindia.org', parentPhone: '90302 18569' ,parentName: 'Parent Name'},
        { rollNumber: '22WJ1A04R8', name: 'SARAN KUMAR KHADKA', email: '22WJ1A04R8@gniindia.org', parentPhone: '91216 12705' },
        { rollNumber: '22WJ1A04R9', name: 'SEELAM MAMATHA', email: '22WJ1A04R9@gniindia.org', parentPhone: '9876543212' },
        { rollNumber: '22WJ1A04T0', name: 'SEEPATHI DEEKSHITH', email: '22WJ1A04T0@gniindia.org', parentPhone: '81066 15359' },
        { rollNumber: '22WJ1A04T1', name: 'SHAIK ABDUL ALEEM', email: '22WJ1A04T1@gniindia.org', parentPhone: '76720 29401' },
        { rollNumber: '22WJ1A04T2', name: 'SHAIK ABDUL SAMAD', email: '22WJ1A04T2@gniindia.org', parentPhone: '95735 25801' },
        { rollNumber: '22WJ1A04T4', name: 'SHAIK AMEESHA', email: '22WJ1A04T4@gniindia.org', parentPhone: '97049 53518' },
        { rollNumber: '22WJ1A04T5', name: 'SHAIK AYAAZ', email: '22WJ1A04T5@gniindia.org', parentPhone: '70138 77447' },
        { rollNumber: '22WJ1A04T6', name: 'SHAIK NASIMA BEGUM', email: '22WJ1A04T6@gniindia.org', parentPhone: '96186 70442' },
        { rollNumber: '22WJ1A04T7', name: 'SHAIK RAFI', email: '22WJ1A04T7@gniindia.org', parentPhone: '91001 71266' },
        { rollNumber: '22WJ1A04T8', name: 'SHAIK SAIFAN', email: '22WJ1A04T8@gniindia.org', parentPhone: '75694 31620' },
        { rollNumber: '22WJ1A04T9', name: 'SHAIK SAJITHA', email: '22WJ1A04T9@gniindia.org', parentPhone: '7672029401' },
        { rollNumber: '22WJ1A04U1', name: 'SHETTI AVINASH', email: '22WJ1A04U1@gniindia.org', parentPhone: '90107 52838' },
        { rollNumber: '22WJ1A04U2', name: 'SHIVANNAGARI NAVYA', email: '22WJ1A04U2@gniindia.org', parentPhone: '9876543212' },
        { rollNumber: '22WJ1A04U3', name: 'SHYAMALA RAMYA', email: '22WJ1A04U3@gniindia.org', parentPhone: '9063712685' },
        { rollNumber: '22WJ1A04U4', name: 'SIDDI SHIVA PRASAD', email: '22WJ1A04U4@gniindia.org', parentPhone: '94417 20877' },
        { rollNumber: '22WJ1A04U5', name: 'SIRIGIRI MANISHA', email: '22WJ1A04U5@gniindia.org', parentPhone: '79958 26466' },
        { rollNumber: '22WJ1A04U6', name: 'SIRIGIRI SRIKAR REDDY', email: '22WJ1A04U6@gniindia.org', parentPhone: '99083 67647' },
        { rollNumber: '22WJ1A04U7', name: 'SIRIMALLE PAVAN KUMAR', email: '22WJ1A04U7@gniindia.org', parentPhone: '86396 37918' },
        { rollNumber: '22WJ1A04U8', name: 'SOUDALA SANDEEP', email: '22WJ1A04U8@gniindia.org', parentPhone: '99491 99784' },
        { rollNumber: '22WJ1A04U9', name: 'SRIPATHI YUGENDER REDDY', email: '22WJ1A04U9@gniindia.org', parentPhone: '83741 60108' },
        { rollNumber: '22WJ1A04V0', name: 'SUDI SRINIVAS', email: '22WJ1A04V0@gniindia.org', parentPhone: '83280 04390' },
        { rollNumber: '22WJ1A04V1', name: 'SUKHVINDERSINGH NAWAB', email: '22WJ1A04V1@gniindia.org', parentPhone: '90288 37713' },
        { rollNumber: '22WJ1A04V3', name: 'SURA DIVYA', email: '22WJ1A04V3@gniindia.org', parentPhone: '9876543211' },
        { rollNumber: '22WJ1A04V4', name: 'SURA RISHINADH', email: '22WJ1A04V4@gniindia.org', parentPhone: '90638 38805' },
        { rollNumber: '22WJ1A04V5', name: 'T TEJA NAIDU', email: '22WJ1A04V5@gniindia.org', parentPhone: '90308 57637' },
        { rollNumber: '22WJ1A04V6', name: 'TALARI UDAY KIRAN', email: '22WJ1A04V6@gniindia.org', parentPhone: '93470 69874' },
        { rollNumber: '22WJ1A04V7', name: 'TALUGONDA SAI DINESH', email: '22WJ1A04V7@gniindia.org', parentPhone: '99120 49010' },
        { rollNumber: '22WJ1A04V8', name: 'TEDDU UDAY KUMAR', email: '22WJ1A04V8@gniindia.org', parentPhone: '9894 39316' },
        { rollNumber: '22WJ1A04V9', name: 'THADAGONI THARUN GOUD', email: '22WJ1A04V9@gniindia.org', parentPhone: '90149 79331' },
        { rollNumber: '22WJ1A04W0', name: 'THADEM KRISHNA KARTHIK', email: '22WJ1A04W0@gniindia.org', parentPhone: '83749 85034' },
        { rollNumber: '22WJ1A04W1', name: 'THADISHETTI SHIVA PRASAD', email: '22WJ1A04W1@gniindia.org', parentPhone: '6305 263 268' },
        { rollNumber: '22WJ1A04W2', name: 'THAMMINENI YAMUNA', email: '22WJ1A04W2@gniindia.org', parentPhone: '93902 26041' },
        { rollNumber: '22WJ1A04W3', name: 'THOTA ANUSHA', email: '22WJ1A04W3@gniindia.org', parentPhone: '95538 52205' },
        { rollNumber: '22WJ1A04W4', name: 'TIRUNAGARI PUSHPA SHREE', email: '22WJ1A04W4@gniindia.org', parentPhone: '86394 18362' },
        { rollNumber: '22WJ1A04W5', name: 'UPADHYAYULA VYSHNAVI', email: '22WJ1A04W5@gniindia.org', parentPhone: '95730 55369' },
        { rollNumber: '22WJ1A04W6', name: 'UPPARI SHUBHAM SAGAR', email: '22WJ1A04W6@gniindia.org', parentPhone: '99591 39770' },
        { rollNumber: '22WJ1A04W7', name: 'KHATROTH SUCHITRA', email: '22WJ1A04W7@gniindia.org', parentPhone: '9493001181' },
        { rollNumber: '22WJ1A04W8', name: 'V RAJESHWAR REDDY', email: '22WJ1A04W8@gniindia.org', parentPhone: '79957 07196' },
        { rollNumber: '22WJ1A04W9', name: 'V SRAVANI', email: '22WJ1A04W9@gniindia.org', parentPhone: '76739 07091' },
        { rollNumber: '22WJ1A04X0', name: 'VADITYA SATISH', email: '22WJ1A04X0@gniindia.org', parentPhone: '78939 63624' },
        { rollNumber: '22WJ1A04X1', name: 'VADTHYAVATH SIDDU', email: '22WJ1A04X1@gniindia.org', parentPhone: '9876543211' },
        { rollNumber: '22WJ1A04X2', name: 'VALLAPU SANDEEP', email: '22WJ1A04X2@gniindia.org', parentPhone: '93479 86782' },
        { rollNumber: '22WJ1A04X3', name: 'VALLOJU KARTHIK', email: '22WJ1A04X3@gniindia.org', parentPhone: '94935 56005' },
        { rollNumber: '22WJ1A04X4', name: 'VARAKANTHAM SREE VARSHITH REDDY', email: '22WJ1A04X4@gniindia.org', parentPhone: '6304 081 291' },
        { rollNumber: '22WJ1A04X5', name: 'VARTYAVATH PRAVEEN KUMAR', email: '22WJ1A04X5@gniindia.org', parentPhone: '78935 61311' },
        { rollNumber: '22WJ1A04X6', name: 'VEEREDDY NAVYA', email: '22WJ1A04X6@gniindia.org', parentPhone: '95156 65285' },
        { rollNumber: '22WJ1A04X7', name: 'VELJARLA HARISH', email: '22WJ1A04X7@gniindia.org', parentPhone: '83094 34430' },
        { rollNumber: '22WJ1A04X8', name: 'VELPULA KARTHIK', email: '22WJ1A04X8@gniindia.org', parentPhone: '78425 37127' },
        { rollNumber: '22WJ1A04X9', name: 'VEMIREDDY YASHWANTH SAI', email: '22WJ1A04X9@gniindia.org', parentPhone: '9014624508' },
        { rollNumber: '22WJ1A04Y0', name: 'VEMULA RAJESH', email: '22WJ1A04Y0@gniindia.org', parentPhone: '73374 82843' },
        { rollNumber: '22WJ1A04Y1', name: 'VEMULA SAKETH GOUD', email: '22WJ1A04Y1@gniindia.org', parentPhone: '6303 276 425' },
        { rollNumber: '22WJ1A04Y2', name: 'VODNALA LASYAPRIYA', email: '22WJ1A04Y2@gniindia.org', parentPhone: '6302 660 657' },
        { rollNumber: '22WJ1A04Y3', name: 'WANAPARTHI MADHU KUMAR', email: '22WJ1A04Y3@gniindia.org', parentPhone: '78938 66451' },
        { rollNumber: '22WJ1A04Y4', name: 'YADARI RAMANJANEYULU', email: '22WJ1A04Y4@gniindia.org', parentPhone: '93928 77359' },
        { rollNumber: '22WJ1A04Y5', name: 'YALLA SOWMITH REDDY', email: '22WJ1A04Y5@gniindia.org', parentPhone: '6300 180 936' },
        { rollNumber: '22WJ1A04Y7', name: 'NETHALA KAVERI', email: '22WJ1A04Y7@gniindia.org', parentPhone: '79896 21814' },
        { rollNumber: '22WJ1A04Y8', name: 'YAMPALLA HARISH KUMAR REDDY', email: '22WJ1A04Y8@gniindia.org', parentPhone: '6300454238' },
        { rollNumber: '22WJ1A04Z0', name: 'AVULA SHIVAJI', email: '22WJ1A04Z0@gniindia.org', parentPhone: '9010762452' },
        { rollNumber: '22WJ1A04Z1', name: 'KONIDINA VEERA NAGA SANTHOSH', email: '22WJ1A04Z1@gniindia.org', parentPhone: '7989935721' },
        { rollNumber: '21WJ1A0455', name: 'CHENNURI SAI TEJA', email: '21WJ1A0455@gniindia.org', parentPhone: '6304232461' },
        { rollNumber: '23WJ1A0427', name: 'SOUDOJU UDAY KIRAN', email: '23WJ1A0427@gniindia.org', parentPhone: '7569639641' },
        { rollNumber: '23WJ1A0428', name: 'TEKUMATLA SRIVIDYA', email: '23WJ1A0428@gniindia.org', parentPhone: '9876543212' },
        { rollNumber: '23WJ1A0429', name: 'THATIKANTI NAVEEN KUMAR', email: '23WJ1A0429@gniindia.org', parentPhone: '7893758110' },
        { rollNumber: '23WJ1A0430', name: 'THUDUM VIDHYA', email: '23WJ1A0430@gniindia.org', parentPhone: '7569721009' },
        { rollNumber: '23WJ1A0431', name: 'VADDE SANDEEP', email: '23WJ1A0431@gniindia.org', parentPhone: '9876543212' },
        { rollNumber: '23WJ1A0432', name: 'VARANASI CHARAN RAJ', email: '23WJ1A0432@gniindia.org', parentPhone: '8074934643' },
        { rollNumber: '23WJ1A0433', name: 'YANAM JHANSI RANI', email: '23WJ1A0433@gniindia.org', parentPhone: '9876543212' },
      ];
      
      let messageLogs = [];
      
      // Simulated server-side database
      const localStorageDatabase = {
    saveMessage: function(log) {
      let messages = JSON.parse(localStorage.getItem('messageLogs')) || [];
      messages.push(log);
      this.cleanupOldMessages(messages);
      localStorage.setItem('messageLogs', JSON.stringify(messages));
    },
    getAllMessages: function() {
      return JSON.parse(localStorage.getItem('messageLogs')) || [];
    },
    cleanupOldMessages: function(messages) {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      const filteredMessages = messages.filter(log => new Date(log.timestamp) > oneMonthAgo);
      localStorage.setItem('messageLogs', JSON.stringify(filteredMessages));
    },
    clearAllLogs: function() {
      localStorage.removeItem('messageLogs');
    }
  };
      // Fetch messages from the server when the page loads
      document.addEventListener('DOMContentLoaded', function() {
        fetchMessagesFromServer();
      periodicCleanup();
      setupToggleButtons();
      });
      
      function toggleMessageForm() {
      const messageForm = document.getElementById('messageForm');
      if (messageForm.style.display === 'none') {
          messageForm.style.display = 'block';
          messageForm.classList.add('fade-in');
      } else {
          messageForm.style.display = 'none';
      }
  }
  
  function toggleBulkMessageForm() {
      const bulkMessageForm = document.getElementById('bulkMessageForm');
      if (bulkMessageForm.style.display === 'none') {
          bulkMessageForm.style.display = 'block';
          bulkMessageForm.classList.add('fade-in');
          document.getElementById('bulkMessageContent').value = ''; // Clear previous message
      } else {
          bulkMessageForm.style.display = 'none';
      }
  }
  
  function toggleCRProfiles() {
      const crProfiles = document.getElementById('crProfiles');
      if (crProfiles.style.display === 'none') {
          showCRProfiles();
          crProfiles.style.display = 'block';
          crProfiles.classList.add('fade-in');
      } else {
          crProfiles.style.display = 'none';
      }
  }
  
     
      function fetchMessagesFromServer() {
    messageLogs = localStorageDatabase.getAllMessages();
    updateMessageLogs();
  }
      
  // ... (keep all existing code above this point)

  document.getElementById('searchBtn').addEventListener('click', function() {
    const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
    const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
    const profileCard = document.getElementById('profileCard');
    const messageForm = document.getElementById('messageForm');
    const bulkMessageForm = document.getElementById('bulkMessageForm');
    const crProfiles = document.getElementById('crProfiles');

    // Hide other elements
    messageForm.style.display = 'none';
    bulkMessageForm.style.display = 'none';
    crProfiles.style.display = 'none';

    // Toggle profile card visibility
    if (profileCard.style.display === 'block') {
        profileCard.style.display = 'none';
        return; // Exit the function early if we're hiding the profile card
    }

    if (student) {
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentRoll').textContent = student.rollNumber;
        document.getElementById('studentEmail').textContent = student.email;
        document.getElementById('parentName').textContent = student.parentName || 'Not available';
        document.getElementById('parentPhone').textContent = student.parentPhone;
        
        profileCard.style.display = 'block';
        profileCard.classList.add('fade-in');
    } else {
        alert('Student not found. Please check the roll number and try again.');
        profileCard.style.display = 'none';
    }
});

// Function to hide all open elements
function hideAllElements() {
    const elementsToHide = [
        'profileCard', 'messageForm', 'bulkMessageForm', 'crProfiles'
    ];
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
}

// Add click event listeners to other buttons to hide elements
const buttonsToAddListener = [
    'messageAllBtn', 'exportLogsBtn', 'clearLogsBtn'
];

buttonsToAddListener.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener('click', hideAllElements);
    }
});

// ... (keep all existing code below this point)
      
      
      function callParent() {
          const parentPhone = document.getElementById('parentPhone').textContent;
          if (parentPhone) {
              // Remove any non-digit characters from the phone number
              const cleanedNumber = parentPhone.replace(/\D/g, '');
              // Create the tel: URI
              const telUri = `tel:${cleanedNumber}`;
              // Attempt to initiate the call
              window.location.href = telUri;
              // Log the call attempt
              logMessage('Faculty', cleanedNumber, 'Call initiated', 'completed');
          } else {
              alert('Parent phone number not available.');
          }
      }
      
      function showMessageForm() {
        const messageForm = document.getElementById('messageForm');
        messageForm.style.display = 'block';
        messageForm.classList.add('fade-in');
      }
      
      function saveMessage() {
        const message = document.getElementById('messageContent').value;
        
        if (message.trim() === '') {
          alert('Please enter a message.');
          return;
        }
      
        const log = {
          sender: 'Faculty',
          recipient: document.getElementById('parentPhone').textContent,
          message: message,
          timestamp: new Date().toISOString(),
          status: 'saved'
        };
        
        localStorageDatabase.saveMessage(log);
    fetchMessagesFromServer();
      
        alert('Message saved successfully');
      }
      
      function sendMessage() {
        const parentPhone = document.getElementById('parentPhone').textContent;
        const message = document.getElementById('messageContent').value;
        
        if (message.trim() === '') {
          alert('Please enter a message.');
          return;
        }
      
        // Open SMS app with pre-filled message for individual parent
        window.location.href = `sms:${parentPhone}?body=${encodeURIComponent(message)}`;
      
        const log = {
          sender: 'Faculty',
          recipient: parentPhone,
          message: message,
          timestamp: new Date().toISOString(),
          status: 'sent'
        };
        serverDatabase.saveMessage(log);
        fetchMessagesFromServer();
      
        document.getElementById('messageContent').value = '';
        localStorageDatabase.saveMessage(log);
        fetchMessagesFromServer();
      }
      
      function showBulkMessageForm() {
    const bulkMessageForm = document.getElementById('bulkMessageForm');
    document.getElementById('bulkMessageContent').value = ''; // Clear previous message
    bulkMessageForm.style.display = 'block';
    bulkMessageForm.classList.add('fade-in');
  }
      
      function saveBulkMessage() {
    const message = document.getElementById('bulkMessageContent').value;
    
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    // Save a bulk message log for each student
    students.forEach(student => {
      const log = {
        sender: 'Faculty',
        recipient: student.parentPhone,
        message: message,
        timestamp: new Date().toISOString(),
        status: 'saved (bulk)'
      };
      localStorageDatabase.saveMessage(log);
    });
  
    fetchMessagesFromServer();
    updateMessageLogs();
  
    alert('Bulk message saved successfully');
  }
      
      function sendBulkMessage() {
        const message = document.getElementById('bulkMessageContent').value;
        
        if (message.trim() === '') {
          alert('Please enter a message.');
          return;
        }
      
        // Prepare bulk SMS
        const phoneNumbers = students.map(student => student.parentPhone).join(',');
        
        // Open SMS app with pre-filled message for bulk sending
        window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
      
        // Simulating sending bulk SMS and storing logs
        students.forEach(student => {
          const log = {
            sender: 'Faculty',
            recipient: student.parentPhone,
            message: message,
            timestamp: new Date().toISOString(),
            status: 'sent'
          };
          localStorageDatabase.saveMessage(log);;
        });
        fetchMessagesFromServer();
      
        document.getElementById('bulkMessageContent').value = '';
        document.getElementById('bulkMessageForm').style.display = 'none';
      }
      
      function updateMessageLogs() {
        const logsContainer = document.getElementById('messageLogs');
        logsContainer.innerHTML = '';
        messageLogs.slice(-5).reverse().forEach(log => {
          const logEntry = document.createElement('p');
          const timestamp = new Date(log.timestamp);
          const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
          logEntry.textContent = `${formattedDate} - To: ${log.recipient} - Status: ${log.status}`;
          logEntry.classList.add('fade-in');
          logsContainer.appendChild(logEntry);
        });
      }
      
      function exportMessageLogs() {
          const csvContent = "data:text/csv;charset=utf-8," 
              + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status\n"
              + messageLogs.map(e => {
                  const timestamp = new Date(e.timestamp);
                  const formattedTimestamp = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}`;
                  const student = students.find(s => s.parentPhone === e.recipient);
                  return `${formattedTimestamp},${e.sender},${e.recipient},${student ? student.name : ''},${student ? student.rollNumber : ''},${student ? student.parentName : ''},${e.message},${e.status}`;
              }).join("\n");
      
          const encodedUri = encodeURI(csvContent);
          const link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", "message_logs.csv");
          document.body.appendChild(link);
          link.click();
      }
      
      // Initialize message logs
      fetchMessagesFromServer();
      function periodicCleanup() {
    const messages = localStorageDatabase.getAllMessages();
    localStorageDatabase.cleanupOldMessages(messages);
  }
  
  // Call this function every day
  setInterval(periodicCleanup, 24 * 60 * 60 * 1000);
  document.addEventListener('DOMContentLoaded', function() {
    fetchMessagesFromServer();
    periodicCleanup();
  });
  function clearAllLogs() {
    if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
      localStorage.removeItem('messageLogs');
      messageLogs = [];
      updateMessageLogs();
      alert("All message logs have been cleared.");
    }
  }
  function clearAllLogs() {
    if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
      localStorageDatabase.clearAllLogs();
      messageLogs = [];
      updateMessageLogs();
      alert("All message logs have been cleared.");
    }
  }
  function showCRProfiles() {
    const crProfiles = document.getElementById('crProfiles');
    crProfiles.innerHTML = ''; // Clear existing profiles
    
    // Add CR profiles (replace with your actual CR data and photo URLs)
    const crs = [
          { name: 'Santosh', rollNumber: '22WJ1A04Z1', email: 'cr1@example.com', photo: 'https://i.ibb.co/znrRBW1/image.png' },
          { name: 'Yashwanth', rollNumber: '22WJ1A04X9', email: 'cr2@example.com', photo: 'https://i.ibb.co/yPBRxcN/image.png' },
          { name: 'Pushpa', rollNumber: '22WJ1A04W3', email: 'cr3@example.com', photo: 'https://i.ibb.co/BGqBcQp/image.png' },
          { name: 'Anusha', rollNumber: '22WJ1A04W4', email: 'cr4@example.com', photo: 'https://i.ibb.co/6XNHkhv/image.png' }
      ];
  
      crs.forEach(cr => {
          const profileCard = document.createElement('div');
          profileCard.className = 'profile-card cr-card';
          profileCard.innerHTML = `
              <div class="cr-info">
                  <h3>${cr.name}</h3>
                  <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
                  <p><strong>Email:</strong> ${cr.email}</p>
                  <button onclick="callCR('${cr.rollNumber}')">Call</button>
                  <button onclick="messageCR('${cr.rollNumber}')">Message</button>
              </div>
              <div class="cr-photo">
                  <img src="${cr.photo}" alt="${cr.name} photo">
              </div>
          `;
          crProfiles.appendChild(profileCard);
      });
  }
  
  function callCR(rollNumber) {
    const cr = students.find(s => s.rollNumber === rollNumber);
    if (cr && cr.parentPhone) {
        window.location.href = `tel:${cr.parentPhone}`;
    } else {
        alert('Phone number not available for this CR.');
    }
  }
  
  function messageCR(rollNumber) {
    const cr = students.find(s => s.rollNumber === rollNumber);
    if (cr && cr.parentPhone) {
        window.location.href = `sms:${cr.parentPhone}`;
    } else {
        alert('Phone number not available for this CR.');
    }
  }