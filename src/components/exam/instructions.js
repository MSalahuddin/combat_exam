import React from "react";

export default () => (
  <div style={{ padding: 15 }}>
    <div className="exam-title">Please read the instructions carefully</div>
    <h3>General Instructions:</h3>
    <ol>
      <li>
        The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you
        to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your
        examination.
      </li>
      <li>
        The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
        <table>
          <tbody>
            <tr>
              <td>
                <span title="Not Visited">
                  <div className="not-picked">1</div>
                </span>
              </td>
              <td>You have not visited the question yet.</td>
            </tr>
            <tr>
              <td>
                <span title="Not Answered">
                  <div className="not-answered">3</div>
                </span>
              </td>
              <td> You have not answered the question.</td>
            </tr>
            <tr>
              <td>
                <span title="Answered">
                  <div className="answered">5</div>
                </span>
              </td>
              <td> You have answered the question.</td>
            </tr>
            <tr>
              <td>
                <span title="Marked">
                  <div className="marked">7</div>
                </span>
              </td>
              <td> You have marked the question.</td>
            </tr>
            <tr>
              <td>
                <span title="Marked and answered">
                  <div className="markedandanswered">9</div>
                </span>
              </td>
              <td> You have marked and answered the question.</td>
            </tr>
            {/* <tr>
              <td>
                <span title="Not Answered &amp; Mark for Review">7</span>
              </td>
              <td> You have NOT answered the question, but have marked the question for review.</td>
            </tr>
            <tr>
              <td>
                <span title="Answered &amp; Mark for Review">9</span>
              </td>
              <td> You have answered the question, but marked it for review.</td>
            </tr> */}
          </tbody>
        </table>
        The Marked for Review status for a question simply indicates that you would like to look at that question again.
        <span>If a question is answered and Marked for Review, your answer for that question will be considered in the evaluation.</span>
      </li>
      <li>
        You can click on the "&gt;" arrow which appears to the left of question palette to collapse the question palette thereby maximizing the
        question window. To view the question palette again, you can click on "&lt;" which appears on the right side of question window.
      </li>
    </ol>
    <h3>Navigating to a Question :</h3>
    <ol start="4">
      <li>
        To answer a question, do the following:
        <ol>
          <li>
            Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using
            this option does NOT save your answer to the current question.
          </li>
          <li>
            Click on <strong>Save &amp;Next</strong> to save your answer for the current question and then go to the next question.
          </li>
          <li>
            Click on <strong>Mark for Review &amp; Next </strong>to save your answer for the current question, mark it for review, and then go to the
            next question.
          </li>
        </ol>
      </li>
    </ol>
    <h3>Answering a Question :</h3>
    <ol start="5">
      <li>
        Procedure for answering a multiple choice type question:
        <ol>
          <li> To select your answer, click on the button of one of the options</li>
          <li>
            To deselect your chosen answer, click on the button of the chosen option again or click on the <strong>Clear Response</strong> button
          </li>
          <li> To change your chosen answer, click on the button of another option</li>
          <li>
            To save your answer, you MUST click on the <strong>Save &amp; Next</strong> button
          </li>
          <li>
            To mark the question for review, click on the <strong>Mark for Review &amp; Next</strong> button.If an answer is selected for a question
            that is Marked for Review, that answer will be considered in the evaluation.
          </li>
        </ol>
      </li>
      <li>
        To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for
        answering that type of question.
      </li>
      <li> Note that ONLY Questions for which answers are saved or marked for review after answering will be considered for evaluation.</li>
    </ol>
    <h3>Navigating through sections:</h3>
    <ol start="8">
      <li>
        Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section
        name. The section you are currently viewing is highlighted.
      </li>
      <li>
        After clicking the Save &amp; Next button on the last question for a section, you will automatically be taken to the first question of the
        next section.
      </li>
      <li> You can shuffle between tests and questions anytime during the examination as per your convenience only during the time stipulated.</li>
      <li> Candidate can view the corresponding section summary as part of the legend that appears in every section above the question palette.</li>
    </ol>
  </div>
);
