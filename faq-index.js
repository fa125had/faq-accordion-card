const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const button = faq.querySelector('.question_wraper')
    const toggleArrow = faq.querySelector('.toggleButton');
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');
    // console.log(answer);
    button.addEventListener('click', () => {
        if(answer.classList.contains('showContent')) {
            answer.classList.remove('showContent');
            question.classList.remove('activeQuestion');
            toggleArrow.classList.remove('activeButton');
        } else {
            const activeAnswers = document.querySelectorAll('.showContent');
            const activeQuestions = document.querySelectorAll('.activeQuestion');
            const activeButtons = document.querySelectorAll('.activeButton');
            activeAnswers.forEach((activeAnswer) => {
                activeAnswer.classList.remove('showContent');
            });
            activeQuestions.forEach(activeQuestion => {
                activeQuestion.classList.remove('activeQuestion');
            });
            activeButtons.forEach(activeButton => {
                activeButton.classList.remove('activeButton');
            });
            answer.classList.add('showContent');
            question.classList.add('activeQuestion');
            toggleArrow.classList.add('activeButton');
        }
        
    });
});