// chapter-selection.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the selected subject from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedSubject = urlParams.get('subject');

    // Get the chapter dropdown element
    const chapterDropdown = document.getElementById('chapter');

    // Get the marks dropdown and custom marks input elements
    const marksDropdown = document.getElementById('marks');
    const customMarksInput = document.getElementById('custom-marks');

    // Define chapters based on the selected subject
    const chapters = getChapters(selectedSubject);

    // Populate the chapter dropdown options dynamically
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter;
        option.text = chapter;
        chapterDropdown.add(option);
    });

    // Add event listener for marks dropdown change
    marksDropdown.addEventListener('change', function () {
        // Show/hide the custom marks input based on the selected option
        customMarksInput.style.display = (marksDropdown.value === 'custom') ? 'block' : 'none';

        // If 'Mixed Quiz' is selected, set the chapter dropdown value to 'MIXED CHAPTER'
        if (marksDropdown.value === 'mixed-quiz') {
            chapterDropdown.innerHTML = ''; // Clear existing options
            const option = document.createElement('option');
            option.value = 'MIXED CHAPTER';
            option.text = 'MIXED CHAPTER';
            chapterDropdown.add(option);
            chapterDropdown.value = 'MIXED CHAPTER';
            chapterDropdown.disabled = true; // Disable chapter selection for 'Mixed Quiz'
        } else {
            // Enable chapter selection for other options
            chapterDropdown.disabled = false;
        }
    });
});

function getChapters(subject) {
    switch (subject) {
        case 'physics':
            return [
                    'વિધુતભારો અને ક્ષેત્રો', 'સ્થિતવિધુત સ્થિતિમાન અને કેપેસીટન્સ', 'પ્રવાહ વિધુત', 
                    'ગતિમાન વિધુતભારો અને ચુંબકત્વ', 'ચુંબકત્વ અને દ્રવ્ય', 'વિદ્યુતચુંબકીય પ્રેરણ', 
                    'પ્રત્યાવર્તી પ્રવાહ', 'વિધુતચુંબકીય તરંગો', 'કિરણ પ્રકાશશાસ્ત્ર અને પ્રકાશીય ઉપકરણો', 
                    'તરંગ પ્રકાશશાસ્ત્ર', 'વિકિરણ અને દ્રવ્યની દ્વૈત પ્રકૃતિ', 'પરમાણુઓ', 'ન્યુક્લિયસ', 
                    'સેમિકન્ડક્ટર ઇલેક્ટ્રોનિક્સ : દ્રવ્યો,રચનાઓ અને સાદા પરિપથો'
            ];
        case 'maths':
                return [
                    'સંબંધ અને વિધેય', 'ત્રિકોણમિતીય પ્રતિવિધેયો', 'શ્રેણિક', 'નિશ્વાયક', 'સાતત્ય અને વિકલનીયતા',
                    'વિકલિતના ઉપયોગો', 'સંકલન', 'સંકલનનો ઉપયોગ', 'વિકલ સમીકરણો', 'સદિશ બીજગણિત', 
                    'ત્રિપરિમાણીય ભૂમિતિ', 'સુરેખ આયોજન', 'સંભાવના'
                ];
        case 'chemistry':
                return [
                    'ધન અવસ્થા', 'દ્વાવણો', 'વિધુત-રસાયણવિજ્ઞાન', 'રાસાયણિક ગતિકી', 'પૃષ્ઠ રસાયણ', 
                    'તત્ત્વોના અલગીકરણ માટેના સામાન્ય સિદ્ધાંતો અને પ્રક્રમો', 'p-વિભાગનાં તત્ત્વો', 
                    'd અને f વિભાગનાં તત્ત્વો', 'સવર્ગ સંયોજનો', 'હેલોઆલ્કેન અને હેલોએરિન સંયોજનો', 
                    'આલ્કોહોલ, ફિનોલ અને ઈથર સંયોજનો', 'આલ્હિહાઈડ, કિટોન અને કાર્બોક્સિલિક એસિડ સંયોજનો', 
                    'એમાઈન સંયોજનો', 'જૈવિક અણુઓ', 'પોલિમર', 'રોજિંદા જીવનમાં રસાયણવિજ્ઞાન'
                ];    
        case 'biology':
                return [
                    'સજીવોમાં પ્રજનન', 'સપુષ્પી વનસ્પતિઓમાં લિંગીપ્રજનન', 'માનવ-પ્રજનન', 'પ્રાજનનિક સ્વાસ્થ્ય', 
                    'આનુવંશિકતા અને ભિન્નતાના સિદ્ધાંતો', 'આનુવંશિકતાનો આણ્વિય આધાર', 'ઉદ્ વિકાસ', 
                    'માનવસ્વાસ્થ્ય અને રોગો', 'અન્ન-ઉન્નતીકરણ માટેની કાર્યનીતિ', 'માનવ-કલ્યાણમાં સુક્ષ્મ જીવો', 
                    'બાયોટેક્નોલોજી : સિદ્ધાંતો અને પ્રક્રિયાઓ', 'બાયોટેક્નોલોજી અને તેનાં પ્રયોજનો', 
                    'સજીવો અને વસ્તી', 'નિવસનતંત્ર', 'જૈવ-વિવિધતા અને સંરક્ષણ', 'પર્યાવરણીય સમસ્યાઓ'
                ];  
        case 'english':
                return [
                    'Can You Install Love?', 'Sunrise On The Kangchenjunga', 'Unforgettable Walt Disney', 
                    'Shaper Shaped', 'Manage Your Stress', 'Stress Control Exercises', 'The Adjustment', 
                    'Blind, Deaf Fish', 'Ants', 'No Men Are Foreign', 'Strike Against War', "Monkey's Paw", 
                    'Sojourner Truth', 'For Youth', 'Heaven Of Freedom', 'Headache', 'Green Charter', 
                    'GRAMMAR'
                ];
        case 'sanskrit':
                return [
                    'वेदामृतम्', 'स्मृतिरससुधा', 'सन्ति मे गुरवो राजन्', 'सजुहुधीह पावकम्', 'यक्ष-युधिष्ठिरसंवादः', 
                    'प्रण्मामि मुदा', 'सुभाषितमधुबिन्दवः', 'ज्ञेयं रुपं तदेव मे', 'किं वैधेन प्रयोजनम्', 'अन्योक्तयः', 
                    'द द द इति', 'कङ्कणस्य तु लोभेन', 'अनपराध्दा अत्रभवती', 'विवाहसंसकार:', 
                    'नमो महर्षये नित्यम्', 'पुत्तलिकापरीक्षा', 'आश्रमवर्णनम्', 'परितुष्टा यास्यति', 'पुस्तकस्य आत्मवृत्तान्तः', 
                    'मुद्रा नाम धनं प्रोक्तम्', 'व्याकरणम्'
                ];   
        case 'computer':
                return [
                    'કમ્પોઝરનો ઉપયોગ કરી HTML ફોર્મની રચના', 'કસ્કેડિંગ સ્ટાઇલશીટ અને જાવાસ્ક્રિપ્ટ', 
                    'કમ્પોઝરનો ઉપયોગ કરી સરળ વેબસાઇટની રચના', 'ઈ-કૉમર્સનો પરિચય', 'એમ-કોમર્સનો પરિચય', 
                    'ઓબ્જેક્ટ આધારિત ખ્યાલો', 'જાવાની મૂળભૂત બાબતો', 'જવામાં ક્લાસ અને ઓબ્જેક્ટ', 
                    'ઍરે અને સ્ટ્રિન્ગનો ઉપયોગ', 'જાવામાં અપવાદરૂપ પરિસ્થિતિનું વ્યવસ્થાપન', 'ફાઈલ-વ્યવસ્થાપન', 
                    'લેટેક્સની મદદથી દસ્તાવેજનું પ્રકાશન', 'અન્ય ઉપયોગી નિઃશુલ્ક ટૂલ્સ અને સેવાઓ'              
                ];                                    
        default:
            return [];
    }
}

document.getElementById('start-quiz-button').addEventListener('click', startQuiz);

function startQuiz() {
    // Get selected chapter and marks
    const selectedChapter = document.getElementById('chapter').value;
    const selectedMarks = document.getElementById('marks').value;
    const customMarks = document.getElementById('custom-marks-input').value;

    // Use the selected data to start the quiz
    // You can redirect to the quiz page or handle it as needed
    console.log(`Starting Quiz with Chapter: ${selectedChapter}, Marks: ${selectedMarks}, Custom Marks: ${customMarks}`);
    // You can redirect or handle the quiz logic here
}

// chapter-selection.js
document.getElementById('start-quiz-button').addEventListener('click', startQuiz);

function startQuiz() {
    // Get selected subject, chapter, and marks
    const selectedSubject = getSelectedSubject();
    const selectedChapter = getSelectedChapter();
    const selectedMarks = getSelectedMarks();

    // Redirect to the quiz page with the selected parameters
    // window.location.href = `/PAGES/QUIZ/quiz.html?subject=${selectedSubject}&chapter=${selectedChapter}&marks=${selectedMarks}`;
    window.location.href = `../QUIZ/quiz.html?subject=${selectedSubject}&chapter=${selectedChapter}&marks=${selectedMarks}`;
}

function getSelectedSubject() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('subject');
}

function getSelectedChapter() {
    const chapterDropdown = document.getElementById('chapter');
    return chapterDropdown.value;
}

function getSelectedMarks() {
    const marksDropdown = document.getElementById('marks');
    return marksDropdown.value === 'custom'
        ? document.getElementById('custom-marks-input').value
        : marksDropdown.value;
}

