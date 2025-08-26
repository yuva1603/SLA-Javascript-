// Quiz Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Quiz variables
    const quizForm = document.getElementById('study-method-quiz');
    const questions = Array.from(document.querySelectorAll('.quiz-question'));
    const nextBtn = document.getElementById('next-question');
    const prevBtn = document.getElementById('prev-question');
    const progressBar = document.getElementById('quiz-progress');
    let currentQuestion = 0;
    
    // Initialize quiz
    showQuestion(currentQuestion);
    updateProgress();
    updateButtons();
    
    // Next question button
    nextBtn.addEventListener('click', function() {
        if (validateQuestion(currentQuestion)) {
            currentQuestion++;
            showQuestion(currentQuestion);
            updateProgress();
            updateButtons();
        } else {
            alert('Please select an answer before proceeding.');
        }
    });
    
    // Previous question button
    prevBtn.addEventListener('click', function() {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
        updateButtons();
    });
    
    // Show specific question
    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.classList.toggle('active', i === index);
        });
    }
    
    // Validate that an option was selected
    function validateQuestion(index) {
        const question = questions[index];
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        return selectedOption !== null;
    }
    
    // Update progress bar
    function updateProgress() {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Update navigation buttons
    function updateButtons() {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next';
        
        if (currentQuestion === questions.length - 1) {
            nextBtn.removeEventListener('click', arguments.callee);
            nextBtn.addEventListener('click', showResults);
        }
    }
    
    // Show quiz results
    function showResults() {
        if (validateQuestion(currentQuestion)) {
            // Process answers and determine best study method
            const answers = getQuizAnswers();
            const bestMethod = calculateBestMethod(answers);
            
            // Display results (in a real app, this would be more sophisticated)
            alert(`Based on your answers, we recommend the ${bestMethod} study method!`);
            
            // Reset quiz
            currentQuestion = 0;
            showQuestion(currentQuestion);
            updateProgress();
            updateButtons();
            quizForm.reset();
        } else {
            alert('Please select an answer before seeing your results.');
        }
    }
    
    // Get all quiz answers
    function getQuizAnswers() {
        const answers = [];
        questions.forEach(question => {
            const selectedOption = question.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                answers.push(selectedOption.value);
            }
        });
        return answers;
    }
    
    // Determine best study method (simplified)
    function calculateBestMethod(answers) {
        // This is a simplified example - real implementation would be more complex
        const methodScores = {
            'Spaced Repetition': 0,
            'Active Recall': 0,
            'Interleaving': 0,
            'Feynman Technique': 0
        };
        
        answers.forEach(answer => {
            switch(answer) {
                case 'visual':
                    methodScores['Spaced Repetition'] += 2;
                    methodScores['Feynman Technique'] += 1;
                    break;
                case 'auditory':
                    methodScores['Feynman Technique'] += 2;
                    methodScores['Active Recall'] += 1;
                    break;
                case 'kinesthetic':
                    methodScores['Active Recall'] += 2;
                    methodScores['Interleaving'] += 1;
                    break;
                case 'conceptual':
                    methodScores['Interleaving'] += 2;
                    methodScores['Spaced Repetition'] += 1;
                    break;
            }
        });
        
        // Find method with highest score
        return Object.keys(methodScores).reduce((a, b) => 
            methodScores[a] > methodScores[b] ? a : b
        );
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Auth navigation (login/register toggle)
    const showLogin = document.getElementById('show-login');
    const showRegister = document.getElementById('show-register');
    
    if (showLogin && showRegister) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would toggle between forms
            window.location.href = '/login';
        });
        
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would toggle between forms
            window.location.href = '/register';
        });
    }
});