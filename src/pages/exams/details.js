import React, { useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components/macro";

export default function Index() {
  const [active, setActive] = useState("1");

  return (
    <Container style={{ padding: "60px 0" }}>
      <h2 className="details-heading">Exam Details</h2>
      <div className="tabs">
        <div className="tab" active={active === "1"} onClick={() => setActive("1")}>
          Exam Pattern
        </div>
        <div className="tab" active={active === "2"} onClick={() => setActive("2")}>
          Syllabus
        </div>
        <div className="tab" active={active === "3"} onClick={() => setActive("3")}>
          Previous Year Cut-offs
        </div>
        <div className="tab" active={active === "4"} onClick={() => setActive("4")}>
          Job Profile and Emoluments
        </div>
      </div>
      {active === "1" && <Pattern />}
      {active === "2" && <Syllabus />}
      {active === "3" && <Previous />}
      {active === "4" && <JobProfile />}
    </Container>
  );
}

const Pattern = () => (
  <div>
    <p>
      As per the SEBI’s Notification, the selection procedure of SEBI Grade A 2020 recruitment will be Phase I Exam followed by Phase II Exam followed
      by Interview (Phase III). The last time the SEBI Grade A recruitment process took place was in 2018. There is a massive change in the SEBI Grade
      A exam pattern when compared to SEBI Grade A Exam Pattern of Previous Year. The whole recruitment process is wrapped up in around 9 months. For
      example: The notification of SEBI Grade A 2018 vacancies was released on September 15, 2018 and the final results were declared on March 28,
      2019.
    </p>
    <h1>SEBI Grade A 2020 Eligibility Criteria</h1>
    <ol>
      <li>
        <strong> Age</strong>
      </li>
    </ol>
    <p>As on Feb 29, 2020: Maximum: 30 years</p>
    <p>In other words, a candidate must have been born on or after March 01, 1990</p>
    <ol start="2">
      <li>
        <strong> Educational Qualifications</strong>
      </li>
    </ol>
    <p>
      Master’s Degree in any discipline or Bachelors’ Degree in Law or Bachelors’ Degree in Engineering from a recognized university or CA or CFA or
      CS or Cost Accountant.
    </p>
    <h1>SEBI Grade A 2020 Important Dates</h1>
    <p>SEBI Grade A 2020 Important Dates are below.</p>
    <table width="600">
      <tbody>
        <tr>
          <td width="319">
            <p>
              <strong>Activity</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Important Dates</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td width="319">
            <p>Online Application and Payment of fee On-Line</p>
          </td>
          <td>
            <p>March 07, 2020 to March 23, 2020</p>
          </td>
        </tr>
        <tr>
          <td width="319">
            <p>Availability of Call Letters on SEBI website (for On-Line Examinations)</p>
          </td>
          <td>
            <p>Will be intimated by email/SMS</p>
          </td>
        </tr>
        <tr>
          <td width="319">
            <p>Phase I- On-Line Examination</p>
          </td>
          <td>
            <p>April 12, 2020</p>
          </td>
        </tr>
        <tr>
          <td width="319">
            <p>Phase II- On-Line Examination</p>
          </td>
          <td>
            <p>May 03, 2020</p>
          </td>
        </tr>
        <tr>
          <td width="319">
            <p>Phase III- Interview</p>
          </td>
          <td>
            <p>Will be Updated</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>SEBI Grade A 2020 Exam Pattern</h1>
    <p>SEBI Grade A 2020 Exam Pattern is a lot different this year. Have a look:</p>
    <h2>SEBI Grade A 2020 Phase I Exam Pattern</h2>
    <table width="609">
      <tbody>
        <tr>
          <td>
            <p>
              <strong>Paper</strong>
            </p>
          </td>
          <td width="349">
            <p>
              <strong>Streams/ Subjects</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Maximum Marks</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Duration</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Cut off</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Paper 1</p>
          </td>
          <td width="349">
            <p>
              All Streams: Multiple choice questions on the subjects viz. General Awareness (including some questions related to Financial Sector of
              easy to moderate difficulty level), English Language, Quantitative Aptitude and Test of Reasoning.
            </p>
          </td>
          <td>
            <p>100</p>
          </td>
          <td>
            <p>60 minutes</p>
          </td>
          <td>
            <p>30%</p>
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            <p>Paper 2</p>
          </td>
          <td width="349">
            <p>
              General Stream: Multiple choice questions on subjects Commerce, Accountancy, Management, Finance, Costing, Companies Act and Economics.
            </p>
          </td>
          <td>
            <p>100</p>
          </td>
          <td>
            <p>40 minutes</p>
          </td>
          <td>
            <p>40%</p>
          </td>
        </tr>
        <tr>
          <td width="349">
            <p>
              Legal, Information Technology, Engineering Stream (Civil &amp; Electrical), Official Language stream: Multiple choice questions on
              Specialized subject related to stream.
            </p>
          </td>
          <td rowspan="2">
            <p>100</p>
          </td>
          <td rowspan="2">
            <p>40 minutes</p>
          </td>
          <td rowspan="2">
            <p>40%</p>
          </td>
        </tr>
        <tr>
          <td width="349">
            <p>Research Stream:- Multiple choice questions on subjects Economics, Econometrics, Statistics, Finance and Commerce.</p>
          </td>
        </tr>
        <tr>
          <td colspan="2" width="401">
            <p>Aggregate Cut off</p>
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <p>40%</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <em>Note:</em>
    </p>
    <ul>
      <li>
        <em>There shall be negative marking (1/4th of marks assigned to the question) for the Paper 1 and Paper 2 in Phase I.</em>
      </li>
      <li>
        <em>
          There shall be a cut-off of minimum 30% for Paper 1 (no sectional cut-off shall be there) and a cut-off of minimum 40% for Paper 2 in Phase
          I.
        </em>
      </li>
      <li>
        <em>
          Candidates would need to secure separate cut-off in each paper as mentioned at (ii) above as well as aggregate cut-off marks of 40% in Phase
          I exam to be shortlisted for Phase II. Marks obtained in Phase I shall be used only for shortlisting the candidates for Phase II examination
          process and will not be counted for final selection of the candidates.
        </em>
      </li>
      <li>
        <em>
          Subject to the criteria mentioned at (iii) above, all the candidates who clear Phase I shall be shortlisted for Phase II. List of candidates
          shortlisted for Phase II will be made available on SEBI website.
        </em>
      </li>
    </ul>
    <h2>SEBI Grade A 2020 Phase II Exam Pattern</h2>
    <p>Candidates who clear the Phase I have to take the Phase II exam. Below is the exam pattern of SEBI Grade A Phase II exam.</p>
    <table width="628">
      <tbody>
        <tr>
          <td>
            <p>
              <strong>Paper</strong>
            </p>
          </td>
          <td width="263">
            <p>
              <strong>Streams/ Subjects</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Maximum Marks</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Duration</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Cut off</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Weightage</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Paper 1</p>
          </td>
          <td width="263">
            <p>
              All streams: English (Descriptive Test) to
              <br />
              test the drafting skills
            </p>
          </td>
          <td>
            <p>100</p>
          </td>
          <td>
            <p>60 minutes</p>
          </td>
          <td>
            <p>30%</p>
          </td>
          <td>
            <p>1/3rd</p>
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Paper 2</p>
          </td>
          <td width="263">
            <p>
              General Stream: Multiple choice questions on subjects Commerce, Accountancy,
              <br />
              Management, Finance, Costing, Companies Act and Economics.
            </p>
          </td>
          <td>
            <p>100</p>
          </td>
          <td>
            <p>40 minutes</p>
          </td>
          <td>
            <p>40%</p>
          </td>
          <td>
            <p>2/3rd</p>
          </td>
        </tr>
        <tr>
          <td width="263">
            <p>
              Legal, Engineering Stream (Civil &amp;
              <br />
              Electrical) and Official Language stream:
              <br />
              Multiple choice questions on Specialized
              <br />
              subject related to stream. Management, Finance, Costing, Companies Act and Economics.
            </p>
          </td>
          <td rowspan="2">
            <p>100</p>
          </td>
          <td rowspan="2">
            <p>40 minutes</p>
          </td>
          <td rowspan="2">
            <p>40%</p>
          </td>
          <td>
            <p>2/3rd</p>
          </td>
        </tr>
        <tr>
          <td width="263">
            <p>
              Research Stream:- Multiple choice questions
              <br />
              on subjects Economics, Econometrics, Statistics, Finance and Commerce.
            </p>
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td colspan="2" width="319">
            <p>Aggregate Cut off</p>
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <p>40%</p>
          </td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <p>
      <em>Note:</em>
    </p>
    <ul>
      <li>
        <em>
          The details with respect to Paper – 2 of Phase II for Information Technology Stream shall be made available on SEBI website
          (www.sebi.gov.in) in due course.
        </em>
      </li>
      <li>
        <em>Candidates shortlisted for Phase II will be issued new Hall Tickets.</em>
      </li>
      <li>
        <em>
          For candidates who have applied in multiple streams, Paper II will be conducted in various shifts, the timings of which will be intimated in
          the Hall Ticket.
        </em>
      </li>
      <li>
        <em>
          There shall be negative marking (1/4th of marks assigned to the question) for Paper 2 in Phase II (except IT stream for which details shall
          be informed in due course).
        </em>
      </li>
      <li>
        <em>There shall be a cut-off of minimum 30% for Paper 1 and a cut-off of minimum 40% for Paper 2 in Phase II.</em>
      </li>
      <li>
        <em>
          Candidates would need to secure separate cut-off in each paper as mentioned at (iv) above as well as aggregate cut-off marks of 40% in Phase
          II exam (weightage of 1/3rd for Paper 1 and 2/3rd for Paper 2) to be shortlisted for Phase III.
        </em>
      </li>
      <li>
        <em>
          Subject to the criteria mentioned at (v) above, candidates equaling 3 times the number of vacancies shall be shortlisted, in order of merit,
          for Phase III i.e. the Interview. List of candidates shortlisted for Interview will be made available on SEBI website.
        </em>
      </li>
      <li>
        <em>All question papers (except the test of English) will be set bilingually in Hindi and English.</em>
      </li>
    </ul>
    <h2>SEBI Grade A 2020 Interview</h2>
    <p>
      Candidates equaling 3 times the number of vacancies shall be shortlisted, in order of merit, for Phase III i.e. the Interview. List of
      candidates shortlisted for Interview will be made available on SEBI website. Only the shortlisted candidates will be called for interview.
      Application fee shall not be refunded to the candidates not shortlisted for Phase II and Interview. Candidate may opt for interview either in
      Hindi or English. Weightage of marks obtained in Phase II will be 85%, while marks obtained in interview shall be given a weightage of 15%. SEBI
      reserves the right to modify the selection
    </p>
  </div>
);

const Syllabus = () => (
  <div className="tab-section">
    <h1>SEBI Grade A 2020 Syllabus (General Stream)</h1>
    <p>
      For your convenience, we have listed the topics which need to be compulsorily prepared for this exam. Solve SEBI Grade A Previous year question
      paper to get a hang of the questions which were asked in the previous years. Also, Take a Free Mock Test of SEBI Grade A to get to know your
      preparation level. Buy SEBI Grade A Online Test Series for a complete practice which has 10 SEBI Grade A Phase I Paper 1 Mock Tests, 5 Paper 2
      Mock Tests and 5 Phase II Grade A Mock Tests. Since the exam pattern has changed, the syllabus is different when compared to SEBI Grade A
      Syllabus of 2018. Have a look:
    </p>
    <p>Phase 1 Paper 01 Syllabus</p>
    <table>
      <tbody>
        <tr>
          <td>
            <p>
              <strong>English Language</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Test of Reasoning</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Quantitative Aptitude</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>General/ Financial Awareness</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Cloze Test</p>
          </td>
          <td>
            <p>Alpha-numeric/ Alphabetical Series</p>
          </td>
          <td>
            <p>Age Problems</p>
          </td>
          <td>
            <p>International Organisations’ HQ/ President/ Chairman/ Secretary General</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Correct Usage</p>
          </td>
          <td>
            <p>Analogy</p>
          </td>
          <td>
            <p>Average</p>
          </td>
          <td>
            <p>Country in news, with its capital, important rivers, President and PM.</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Error Spotting</p>
          </td>
          <td>
            <p>Analytical Reasoning</p>
          </td>
          <td>
            <p>Boats and Stream</p>
          </td>
          <td>
            <p>National Parks</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Fillers – Single, Double</p>
          </td>
          <td>
            <p>Blood Relations</p>
          </td>
          <td>
            <p>Clock and Calendar Problems</p>
          </td>
          <td>
            <p>Wildlife Sanctuaries</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Idioms and Phrases</p>
          </td>
          <td>
            <p>Coded Inequalities</p>
          </td>
          <td>
            <p>Data Interpretation – Charts and Graphs: Line Graph, Bar Graph, Pie Chart; Tabular; Caselet; Mixed DI</p>
          </td>
          <td>
            <p>Atomic, Nuclear, Thermal Plants</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Odd One Out</p>
          </td>
          <td>
            <p>Coding and Decoding</p>
          </td>
          <td>
            <p>Data Sufficiency</p>
          </td>
          <td>
            <p>Important Dams</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>One Word Substitution</p>
          </td>
          <td>
            <p>Data Sufficiency</p>
          </td>
          <td>
            <p>Decimal and Fractions</p>
          </td>
          <td>
            <p>Dance Forms</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Para</p>
          </td>
          <td>
            <p>Directions and Distances</p>
          </td>
          <td>
            <p>Indices and&nbsp; Surds</p>
          </td>
          <td>
            <p>Ministers and their Constituencies</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp; Jumbles</p>
          </td>
          <td>&nbsp;</td>
          <td>
            <p>Ministers and their Portfolios</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Paragraph Completion</p>
          </td>
          <td>
            <p>Double Line-up</p>
          </td>
          <td>
            <p>LCM and H.C.F</p>
          </td>
          <td>
            <p>Current Affairs (last 6 months)</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Reading Comprehension</p>
          </td>
          <td>
            <p>Inequality</p>
          </td>
          <td>
            <p>Mensuration</p>
          </td>
          <td>
            <p>Indian Financial System</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Sentence Improvement</p>
          </td>
          <td>
            <p>Input Output</p>
          </td>
          <td>
            <p>Mixture and Allegations</p>
          </td>
          <td>
            <p>History and Structure of Indian Banking</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Synonyms/ Antonyms</p>
          </td>
          <td>
            <p>Order and Ranking/Direction</p>
          </td>
          <td>
            <p>Number Series</p>
          </td>
          <td>
            <p>Indian Economy</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Vocabulary based questions</p>
          </td>
          <td>
            <p>Puzzles – Box based, Floor, Calendar, Day/Months based, etc.</p>
          </td>
          <td>
            <p>Number System</p>
          </td>
          <td>
            <p>Regulatory bodies- RBI, SEBI, IRDA, PFRDA, FSDC, FMC</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Word/Phrase Replacement</p>
          </td>
          <td>
            <p>Scheduling</p>
          </td>
          <td>
            <p>Partnership</p>
          </td>
          <td>
            <p>History/Functions/Roles of RBI</p>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <p>Seating Arrangement– Linear, Circular, Facing Inside/Outside, Mixed</p>
          </td>
          <td>
            <p>Percentage</p>
          </td>
          <td>
            <p>Budget Basics</p>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <p>Statement and Conclusion</p>
          </td>
          <td>
            <p>Permutation and Combination</p>
          </td>
          <td>
            <p>Current Union Budget</p>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <p>Statement-Course of Action</p>
          </td>
          <td>
            <p>Pipes and Cisterns</p>
          </td>
          <td>
            <p>International Organisations/ Financial Institutions</p>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <p>Syllogism</p>
          </td>
          <td>
            <p>Probability</p>
          </td>
          <td>
            <p>Indian Constitution</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Profit, Loss and Discount</p>
          </td>
          <td>
            <p>Government Schemes</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Quadratic Equations</p>
          </td>
          <td>
            <p>Monetary and Credit Policies</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Simple and Compound Interest</p>
          </td>
          <td>
            <p>Concepts like BASEL</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Simplification &amp; Approximation</p>
          </td>
          <td>
            <p>Micro Finance</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Base Rate</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Negotiable Instruments</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Credit Rating Agencies</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Financial Inclusions</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Teaser Rates</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>GAAR</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Priority Sector Lending&nbsp;&nbsp;</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Abbreviations</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Important Dates</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Current Bank Rates</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>UNO</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Marketing</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Awards &amp; Honours Sports</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td>
            <p>Sports personalities</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>&nbsp;</p>
    <p>Phase 1 and 2 Paper 02 Syllabus</p>
    <table width="623">
      <tbody>
        <tr>
          <td width="163">
            <p>
              <strong>Commerce &amp; Accountancy</strong>
            </p>
          </td>
          <td width="194">
            <p>
              <strong>Management</strong>
            </p>
          </td>
          <td width="133">
            <p>
              <strong>Finance</strong>
            </p>
          </td>
          <td width="133">
            <p>
              <strong>Costing</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td width="163">
            <p>Accounting as a financial information system;</p>
          </td>
          <td width="194">
            <p>
              Management: its nature and scope; The Management Processes; Planning, Organization, Staffing, Directing and controlling; The Role of a
              Manager in an Organization.
            </p>
          </td>
          <td width="133">
            <p>(a) Financial System:</p>
          </td>
          <td width="133">
            <p>
              Overview of Cost and Management Accounting – Introduction to Cost and Management Accounting, Objectives and Scope of Cost and Management
              Accounting.
            </p>
          </td>
        </tr>
        <tr>
          <td width="163">
            <p>
              Accounting Standards with specific reference to Accounting for Depreciation, Inventories, Revenue Recognition, Fixed Assets, Foreign
              Exchange Transactions, Investments.
            </p>
          </td>
          <td width="194">
            <p>Leadership: The Tasks of a Leader; Leadership Styles; Leadership Theories; A successful Leader versus an effective Leader.</p>
          </td>
          <td width="133">
            <p>Money Market, Capital Market</p>
          </td>
          <td width="133">
            <p>
              Methods of Costing – Single Output/ Unit Costing, Job Costing, Batch Costing, Contract Costing, Process/ Operation Costing, Costing of
              Service Sectors.
            </p>
          </td>
        </tr>
        <tr>
          <td width="163">
            <p>Cash Flow Statement, Fund flow statement, Financial statement analysis; Ratio analysis;</p>
          </td>
          <td width="194">
            <p>
              Human Resource Development: Concept of HRD; Goals of HRD; Performance Appraisal – Potential appraisal and development – Feedback and
              Performance Counselling – Career Planning – Training and Development – Rewards – Employee Welfare. Motivation, Morale, and Incentives:
              Theories of Motivation; How Managers Motivate; Concept of Morale; Factors determining morale; Role of Incentives in Building up Morale.
            </p>
          </td>
          <td width="133">
            <p>
              Reserve Bank of India- functions and conduct of monetary policy, Banking System in India, Financial Institutions – SIDBI, EXIM, NABARD,
              NHB, etc.
            </p>
          </td>
          <td width="133">
            <p>Basics of Cost Control and Analysis – (i) Standard Costing, (ii) Marginal Costing, (iii) Budget and Budgetary Control.</p>
          </td>
        </tr>
        <tr>
          <td width="163">
            <p>Accounting for Share Capital Transactions including Bonus Shares, Right Shares.</p>
          </td>
          <td width="194">
            <p>
              Communication: Steps in the Communication Process; Communication Channels; Oral versus Written Communication; Verbal versus non-verbal
              Communication; upward, downward and lateral communication; Barriers to Communication, Role of Information Technology.
            </p>
          </td>
          <td width="133">
            <p>SEBI – functions and role</p>
          </td>
          <td width="133">
            <p>Lean System and Innovation:-</p>
          </td>
        </tr>
        <tr>
          <td width="163">
            <p>Employees Stock Option and Buy-Back of Securities.</p>
          </td>
          <td width="194">
            <p>Corporate Governance: Factors affecting Corporate Governance; Mechanisms of Corporate Governance.</p>
          </td>
          <td width="133">
            <p>Prevention of Money Laundering</p>
          </td>
          <td width="133">
            <p>a) Introduction to Lean System</p>
          </td>
        </tr>
        <tr>
          <td width="163">
            <p>Preparation and Presentation of Company Final Accounts.</p>
          </td>
          <td width="194">&nbsp;</td>
          <td width="133">
            <p>Know Your Client Framework</p>
          </td>
          <td width="133">
            <p>b) Just-in-Time (JIT)</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>&nbsp;</h1>
    <table width="612">
      <tbody>
        <tr>
          <td width="276">
            <p>
              <strong>Companies Act</strong>
            </p>
          </td>
          <td width="336">
            <p>
              <strong>Economics</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td width="276">
            <p>
              The Companies Act, 2013 – Specific reference to Chapter III, Chapter IV, Chapter VIII, Chapter X, Chapter XI, Chapter XII and Chapter
              XXVII.
            </p>
          </td>
          <td width="336">
            <p>
              Demand and Supply, Market Structures, National Income: Concepts and Measurement, Classical &amp; Keynesian Approach Determination of
              output and employment, Consumption Function, Investment Function, Multiplier and Accelerator, Demand and Supply for Money, IS-LM,
              Inflation and Phillips Curve, Business Cycles
            </p>
          </td>
        </tr>
        <tr>
          <td width="276">&nbsp;</td>
          <td width="336">
            <p>Balance of Payments, Foreign Exchange Markets, Inflation, Monetary and Fiscal Policy, Non-banking Financial Institutions.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      SEBI Grade A mock tests give you a fair idea as how your preparation levels are for the actual exam. Once you are through with the free test and
      have got an idea as in how the actual exam pattern looks like, then in order to practice more, you can buy SEBI Grade A Test Series.
    </p>
  </div>
);

const Previous = () => (
  <div className="tab-section">
    <h1>SEBI Grade A 2020- Previous Years’ Cut-offs</h1>
    <p>
      SEBI Grade A Cut-off is something which is very important to aspirants. While it’s extremely difficult to predict the cut-offs of the upcoming
      exam, we have provided the previous year cut-offs to help you get an idea.
    </p>
    <h2>SEBI Grade A 2018- Phase I Sectional Cut-offs</h2>
    <table width="611">
      <tbody>
        <tr>
          <td width="132">
            <p>
              <strong>All Streams and across all Categories</strong>
            </p>
          </td>
          <td width="96">
            <p>
              <strong>General Awareness</strong>
            </p>
          </td>
          <td width="80">
            <p>
              <strong>English Language</strong>
            </p>
          </td>
          <td width="93">
            <p>
              <strong>Quantitative Aptitude</strong>
            </p>
          </td>
          <td width="85">
            <p>
              <strong>Test of Reasoning</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Awareness about Securities Market</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td width="132">
            <p>&nbsp;</p>
          </td>
          <td width="96">
            <p>16.0</p>
          </td>
          <td width="80">
            <p>16.0</p>
          </td>
          <td width="93">
            <p>16.0</p>
          </td>
          <td width="85">
            <p>16.0</p>
          </td>
          <td>
            <p>16.0</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>SEBI Grade A 2018- Phase I Category-wise Overall Cut-offs</h2>
    <table width="648">
      <tbody>
        <tr>
          <td width="137">
            <p>
              <strong>Stream</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>SC</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>ST</strong>
            </p>
          </td>
          <td width="65">
            <p>
              <strong>OBC (NCL)</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>UR</strong>
            </p>
          </td>
          <td width="55">
            <p>
              <strong>PwBD (HH)</strong>
            </p>
          </td>
          <td width="120">
            <p>
              <strong>PwBD (LD/AU/MD/OD)</strong>
            </p>
          </td>
          <td width="85">
            <p>
              <strong>PwBD(VH)</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>General</p>
          </td>
          <td>
            <p>90</p>
          </td>
          <td>
            <p>103.5</p>
          </td>
          <td width="65">
            <p>110</p>
          </td>
          <td>
            <p>119.25</p>
          </td>
          <td width="55">
            <p>–</p>
          </td>
          <td width="120">
            <p>102.25</p>
          </td>
          <td width="85">
            <p>–</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Legal</p>
          </td>
          <td>
            <p>102.25</p>
          </td>
          <td>
            <p>–</p>
          </td>
          <td width="65">
            <p>107.5</p>
          </td>
          <td>
            <p>101.25</p>
          </td>
          <td width="55">
            <p>–</p>
          </td>
          <td width="120">
            <p>–</p>
          </td>
          <td width="85">
            <p>–</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Information Technology</p>
          </td>
          <td>
            <p>97.5</p>
          </td>
          <td>
            <p>123.25</p>
          </td>
          <td width="65">
            <p>96</p>
          </td>
          <td>
            <p>95.75</p>
          </td>
          <td width="55">
            <p>–</p>
          </td>
          <td width="120">
            <p>–</p>
          </td>
          <td width="85">
            <p>–</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Civil Engineering</p>
          </td>
          <td>
            <p>102.5</p>
          </td>
          <td>
            <p>–</p>
          </td>
          <td width="65">
            <p>105.75</p>
          </td>
          <td>
            <p>105</p>
          </td>
          <td width="55">
            <p>–</p>
          </td>
          <td width="120">
            <p>–</p>
          </td>
          <td width="85">
            <p>–</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Electrical Engineering</p>
          </td>
          <td>
            <p>96.5</p>
          </td>
          <td>
            <p>–</p>
          </td>
          <td width="65">
            <p>–</p>
          </td>
          <td>
            <p>99.25</p>
          </td>
          <td width="55">
            <p>–</p>
          </td>
          <td width="120">
            <p>–</p>
          </td>
          <td width="85">
            <p>–</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>SEBI Grade A 2018- Phase II Sectional Cut-offs</h2>
    <table width="468">
      <tbody>
        <tr>
          <td rowspan="2" width="150">
            <p>
              <strong>All Streams and across all Categories</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Paper I</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Paper 2</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Paper 3</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>&nbsp;40.00</p>
          </td>
          <td>
            <p>40.00</p>
          </td>
          <td>
            <p>40.00</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>SEBI Grade A 2018- Phase II Category-wise Overall Cut-offs</h2>
    <table width="648">
      <tbody>
        <tr>
          <td width="137">
            <p>
              <strong>Stream</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>SC</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>ST</strong>
            </p>
          </td>
          <td width="65">
            <p>
              <strong>OBC (NCL)</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>UR</strong>
            </p>
          </td>
          <td width="55">
            <p>
              <strong>PwBD (HH)</strong>
            </p>
          </td>
          <td width="120">
            <p>
              <strong>PwBD (LD/AU/MD/OD)</strong>
            </p>
          </td>
          <td width="85">
            <p>
              <strong>PwBD(VH)</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>General</p>
          </td>
          <td>
            <p>173.00</p>
          </td>
          <td>
            <p>163.50</p>
          </td>
          <td width="65">
            <p>181.50</p>
          </td>
          <td>
            <p>192</p>
          </td>
          <td width="55">
            <p>-</p>
          </td>
          <td width="120">
            <p>#</p>
          </td>
          <td width="85">
            <p>–</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Legal</p>
          </td>
          <td>
            <p>#</p>
          </td>
          <td>
            <p>-</p>
          </td>
          <td width="65">
            <p>#</p>
          </td>
          <td>
            <p>166.50</p>
          </td>
          <td width="55">
            <p>-</p>
          </td>
          <td width="120">
            <p>-</p>
          </td>
          <td width="85">
            <p>#</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Information Technology</p>
          </td>
          <td>
            <p>#</p>
          </td>
          <td>
            <p>#</p>
          </td>
          <td width="65">
            <p>#</p>
          </td>
          <td>
            <p>155.50</p>
          </td>
          <td width="55">
            <p>#</p>
          </td>
          <td width="120">
            <p>-</p>
          </td>
          <td width="85">
            <p>#</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Civil Engineering</p>
          </td>
          <td>
            <p>#</p>
          </td>
          <td>
            <p>-</p>
          </td>
          <td width="65">
            <p>161.00</p>
          </td>
          <td>
            <p>176.00</p>
          </td>
          <td width="55">
            <p>#</p>
          </td>
          <td width="120">
            <p>-</p>
          </td>
          <td width="85">
            <p>-</p>
          </td>
        </tr>
        <tr>
          <td width="137">
            <p>Electrical Engineering</p>
          </td>
          <td>
            <p>#</p>
          </td>
          <td>
            <p>-</p>
          </td>
          <td width="65">
            <p>-</p>
          </td>
          <td>
            <p>167.00</p>
          </td>
          <td width="55">
            <p>#</p>
          </td>
          <td width="120">
            <p>-</p>
          </td>
          <td width="85">
            <p>-</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const JobProfile = () => (
  <div className="tab-section">
    <h1>SEBI Grade A 2020- Job Profile &amp; Emoluments</h1>
    <h2>Job Profile of SEBI Grade A</h2>
    <p>
      There are different streams within SEBI- General, Legal, Electrical, IT etc. which have different sets of functions. Aspirants clearing the SEBI
      will be assigned to different departments. Generally, the responsibilities and duties of SEBI as an organization are below:
    </p>
    <ul>
      <li>Approval of stock exchanges by-laws.</li>
      <li>Amendment of by-laws of Stock Exchanges.</li>
      <li>Inspection of Accounts of Stock Exchanges and various players.</li>
      <li>Identify and Investigate any malpractices within Securities Markets</li>
      <li>Taking steps for increasing Investors knowledge on Securities Markets</li>
      <li>Suspension of Security Trading of a Stock Exchange</li>
      <li>Granting and Withdrawing Recognition of a Stock Exchange</li>
    </ul>
    <h2>SEBI Grade A 2020- Salary Details</h2>
    <p>
      SEBI is quite good an organization to work for, considering the perks and emoluments for even the smallest of expenses. Let’s have a look at the
      further details:
    </p>
    <table width="600">
      <tbody>
        <tr>
          <td>
            <p>
              <strong>Benefits</strong>
            </p>
          </td>
          <td width="282">
            <p>
              <strong>Details</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>CTC (Cost to Company)</p>
          </td>
          <td width="282">
            <p>Around Rs 11.4 lakh in cities like Mumbai &amp; Delhi</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Pay Scale</p>
          </td>
          <td width="282">
            <p>28150-1550(4)-34350-1750(7)-46600-EB-1750(4)-53600-2000(1)-55600 (17years)</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Basic Pay</p>
          </td>
          <td width="282">
            <p>Rs 28150 per month</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Approximate in-hand salary (with accommodation)</p>
          </td>
          <td width="282">
            <p>Rs 62000</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Approximate in-hand salary (without accommodation)</p>
          </td>
          <td width="282">
            <p>Rs 92000</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Allowances</p>
          </td>
          <td width="282">
            <p>Dearness Allowance, Family Allowance, Local Allowance, etc.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Other perks and concessions are below:</p>
    <ul>
      <li>Leave Fare Concession</li>
      <li>Medical Expenses</li>
      <li>Financial Dailies</li>
      <li>Book Grant</li>
      <li>Briefcase</li>
      <li>Transport Expenses</li>
      <li>House Cleaning Allowance</li>
      <li>Staff Furnishing Scheme</li>
      <li>Computer Allowance</li>
      <li>Subsidized Lunch Facility</li>
    </ul>
  </div>
);
