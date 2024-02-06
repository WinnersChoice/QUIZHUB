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
        case 'gujarati':
            return [
                'વૈષ્ણવજન', 'રેસનો ઘોડો', 'શીલવંત સાધુને', 'ભૂલી ગયા પછી', 'દીકરી', 'વાઇરલ ઇન્ફેક્શન',
                'હું એવો ગુજરાતી', 'છત્રી', 'માધવને દીઠો છે ક્યાંય ?', 'ડાંગવાનો અને...', 'શિકારીને', 'ચોપડાની ઈન્દ્રજાળ',
                'વતનથી વિદાય થતાં', 'જન્મોત્સવ', 'બોલીએ ના કાંઇ', 'ગતિભંગ', 'દિવસો જુદાઈના જાય છે', 'ભૂખથી ભૂંડી ભીખ', 'એક બપોરે',
                'વિરલ વિભૂતિ', 'ચાંદલિયો', 'હિમાલયમાં એક સાહસ', 'લઘુકાવ્યો', 'ઘોડીની સ્વામીભક્તિ'
            ];
        case 'math':
                return [
                    'વાસ્તવિક સંખ્યાઓ', 'બહુપદીઓ', 'દ્વિચલ સુરેખ સમીકરણયુગ્મ', 'દ્વિઘાત સમીકરણ', 'સમાંતર શ્રેણી',
                    'ત્રિકોણ', 'યામ ભૂમિતિ', 'ત્રિકોણમિતિનો પરિચય', 'ત્રિકોણમિતિના ઉપયોગો', 'વર્તુળ', 'રચના', 'વર્તુળ સંબંધિત ક્ષેત્રફળ',
                    'પૃષ્ઠફળ અને ઘનફળ', 'આંકડાશાસ્ત્ર', 'સંભાવના'
                ];
        case 'science':
                return [
                    'રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો', 'ઍસિડ, બેઇઝ અને ક્ષાર', 'ધાતુઓ અને અધાતુઓ', 
                    'કાર્બન અને તેના સંયોજનો', 'તત્ત્વોનું આવર્તનીય વર્ગીકરણ', 'જૈવિક ક્રિયાઓ', 'નિયંત્રણ અને સંકલન',
                    'સજીવો કેવી રીતે પ્રજનન કરે છે?', 'આનુવંશિકતા અને ઉદ્-વિકાસ', 'પરાવર્તન અને વક્રીભવન', 'માનવ આંખ અને રંગબેરંગી દુનિયા', 
                    'વિદ્યુત', 'વિધુતપ્રવાહની ચુંબકીય અસરો','ઊર્જાના સ્ત્રોતો', 'આપણું પર્યાવરણ', 'નૈસર્ગિક સ્ત્રોતોનું પ્રબંધન (વ્યવસ્થાપન)'
                ];    
        case 'social-science':
                return [
                    'ભારતનો વારસો', 'ભારતનો સાંસ્કૃતિક વારસો : પરંપરાઓ : હસ્ત અને લલિતકલા', 'ભારતનો સાંસ્કૃતિક વારસો : શિલ્પ અને સ્થાપત્ય',
                    'ભારતનો સાહિત્યિક વારસો', 'ભારતનો વિજ્ઞાન અને ટેક્નોલૉજીનો વારસો', 'ભારતનો સાંસ્કૃતિક વારસાનાં સ્થળો', 
                    'આપણા વારસાનું જતન', 'કુદરતી સંસાધનો', 'વન અને વન્યજીવન સંસાધન', 'ભારત : કૃષિ', 'ભારત : જળ સંસાધન', 
                    'ભારત : ખનીજ અને શક્તિનાં સંસાધનો', 'ઉત્પાદન ઉધોગો', 'પરિવહન, સંદેશાવ્યહવાર અને વ્યાપાર', 'આર્થિક વિકાસ', 
                    'આર્થિક ઉદારીકરણ વૈશ્વિકીકરણ', 'આર્થિક સમસ્યાઓ અને પડકારો : ગરીબી અને બેરોજગારી', 'ભાવવધારો અને ગ્રાહક જાગૃતિ',
                    'માનવ વિકાસ', 'ભારતની સામાજિક સમસ્યાઓ અને પડકારો', 'સામાજિક પરિવર્તન'
                ]; 
        case 'hindi':
                return [
                        'प्रभुजी तुम चन्दन हम पानी', 'बूढ़ी काकी', 'सवैये', 'एक प्रश्न : चार उत्तर', 'मीरा के पद',
                        'कालिदास का प्राणीप्रेम', 'जन्मभूमि', 'सुधामूर्ति', 'कुत्ते की सिख', 'जीने की कला', 'भारतवर्ष हमारा है',
                        'एक नई शरुआत', 'साधुप्रदेश', 'मेरी माँ', 'हे जनशक्ति महान !', 'चोरी', 'कश्मीर', 'रचना', 'तोता और इन्द्र', 'अलबम',
                        'पहेलियाँ-मुकरियाँ', 'भीतरी समृद्धि', 'भूख'
                ];  
        case 'english':
                return [
                        'Against the Odds', 'The Human Robot', 'An Interview with Arun Krishnamurthy', 'A Wonderful Creation',
                        'Playing with Fire', 'I Love You, Teacher', 'Kach & Devyani', 'Our Feathered Friends', 'Tune up O Teens',
                        'Test of True Love', 'My Song', 'Pencil', 'Growing', 'Vanila Twilight'
                ];
        case 'sanskrit':
                return [
                        'सं वदध्वम्', 'यद्धविष्यो विनश्यति', 'स्वस्थवृत्तं समाचर', 'जनार्दनस्य पश्चिमः सन्देशः', 'गुणवंती कन्या',
                        'काष्ठखण्डः', 'सुभाषितकुसुमानि', 'साक्षिभूतः मनुष्यः', 'चक्षुष्मान् अन्ध एव', 'त्वमेका भवानी', 'यस्य जननं तस्य मरणम्',
                        'कलिकालसर्वज्ञो हेमचन्द्रः', 'गीतामृतम्', 'क इदं दुष्करं कुर्यात्', 'जयः पराजयो वा', 'अद्भुतं युद्धम्', 'स्वभाविकं सादृश्यम्',
                        'मुक्तानि मुक्तकानि', 'सत्यं मयूरः', 'तथैव तिष्ठति'
                ];  
        case 'sharirik-shikshan':
                return [
                        'અષ્ટાંગ યોગનાં અંતરંગ અંગો', 'પ્રાણાયામ', 'બંધ', 'આસન', 'ચેપી અને બિનચેપી રોગ', 'માન્ય ચિકિત્સા પદ્ધતિઓ',
                        'એચ.આઈ.વી. (HIV) અને એઇડ્સ (AIDS) જાગ્રતિ', 'દોડ', 'ઊંચી કૂદ', 'ચક્ર ફેંક', 'કબડ્ડી', 'બાસ્કેટબૉલ', 'હૅન્ડબૉલ',
                        'વૉલીબૉલ', 'ફૂટબૉલ'
                ];   
        case 'computer':
                return [
                        'HTML નો પરિચય', 'HTML મા Head અને Body વિભાગ', 'HTMLમાં છબીઓનું વ્યવસ્થાપન', 'HTMLમાં યાદી અને કોષ્ટકનો ઉપયોગ', 
                        'કેલ્સીનો પરિચય', 'કેલ્સીમાં ડેટાનું ઓડિટિંગ અને ફોર્મેટિંગ', 'કેલ્સીમાં વિધેય', 'કેલ્સીમાં આલેખની રચના', 
                        'સમસ્યા અને સમસ્યાનું નિરાકરણ', 'સી ભાષાનો પરિચય', 'સી ભાષામાં ડેટા પ્રકાર', 'પ્રક્રિયકો અને પદાવલિઓ', 
                        'નિવેશ (Input) / નિર્ગમ (Output) પ્રક્રિયાઓનો ઉપયોગ', 'નિર્ણય માળખાં', 'લૂપ નિયંત્રણ માળખાં','એરે', 'વિધેય'                ];                                    
        default:
            return [];
    }
}


// chapter-selection.js
document.getElementById('start-quiz-button').addEventListener('click', startQuiz);

function startQuiz() {
    console.log('startQuiz function called');
    
    // Get selected subject, chapter, and marks
    const selectedSubject = getSelectedSubject();
    const selectedChapter = getSelectedChapter();
    const selectedMarks = getSelectedMarks();

    console.log('Selected Subject:', selectedSubject);
    console.log('Selected Chapter:', selectedChapter);
    console.log('Selected Marks:', selectedMarks);

    // Validate custom marks
    const customMarks = getCustomMarks();
    console.log('Custom Marks:', customMarks);
    
    if (selectedMarks === 'custom' && (!isValidCustomMarks(customMarks))) {
        alert('Please enter a valid number greater than 0 for custom marks.');
        return;
    }

    // Redirect to the quiz page with the selected parameters
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

function getCustomMarks() {
    const customMarksInput = document.getElementById('custom-marks-input');
    return parseFloat(customMarksInput.value);
}

function isValidCustomMarks(marks) {
    return !isNaN(marks) && marks > 0;
}


