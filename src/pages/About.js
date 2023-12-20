import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="content about">
        <div className="section">
          <div class="hello">
            <h2>안녕하세요. 저는 프론트엔드 개발자 장지은입니다.</h2>
            <p>
              사용자 편의성을 최우선으로 두며, 개발자에게 가독성 높은 코드를
              제공하는 것을 핵심 가치로 삼고 있습니다.
            </p>
            <p class="p1">저는 1986년 대구에서 태어났습니다.</p>
            <p class="p2">
              중학교 시절부터 컴퓨터에 큰 관심을 가지고 있었고, 고등학교에서는
              별도의 사교육 없이 독학으로 교내 홈페이지 경연대회에서 우수상을
              받았습니다. 고등학교 졸업 직전에는 잠시 회계 업무에 종사했지만,
              적성에 맞지 않다고 느껴 즉시 IT 분야로의 전향을 결정했습니다.
            </p>
            <p class="p2">
              효율성이 떨어지는 <code>table</code> 코딩이 일반적이었던 시기에,
              더 나은 코딩을 찾아나가며 웹표준과 웹접근성에 대한 이해를
              높였습니다. 혼자서 공부뿐만 아니라 스터디 그룹에 참여하여 지식을
              쌓았습니다.
            </p>
            <p class="p2">
              현재도 웹페이지 제작 기술 관련 지식을 꾸준히 확장하고 있으며,
              어디에서든 필요한 인재로 성장하기 위해 노력하고 있습니다.
            </p>
          </div>

          <div className="info-list container-fluid">
            <h2>나에 대한 몇 가지</h2>
            <ul className="row">
              <li className="col-md-6">
                <dl>
                  <dt>가족를 정말 사랑합니다.</dt>
                  <dd>
                    저는 남편과 딸, 총 3명의 가족과 함께 살고 있습니다. 제가
                    세상에서 가장 잘 한 일은 남편과 결혼한 것이며, 그 다음으로는
                    매우 예쁘고 귀여운 딸을 낳은 것입니다.
                  </dd>
                </dl>
              </li>
              <li className="col-md-6">
                <dl>
                  <dt>건강해야 한다.</dt>
                  <dd>
                    무엇을 하든 건강해야 한다고 생각합니다. 건강을 위해 좋은
                    음식을 먹고 운동하는 것은 조금 귀찮긴 하지만, 저에게 있어
                    중요합니다.
                  </dd>
                </dl>
              </li>
            </ul>
          </div>

          <div className="info-list link">
            <h2>내가 사용하는 것</h2>

            <div className="row">
              <div className="col-md-6">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.openai.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>ChatGPT</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://react-bootstrap.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>React Bootstrap</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fontawesome.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Font Awesome</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://icons8.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>ICONS8</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.oracle.com/kr/cloud/free/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>오라클 클라우드</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h3>Tech</h3>
                <ul>
                  <li>
                    <a
                      href="https://ko.legacy.reactjs.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>React</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prettier.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Prettier</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Figma</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h3>Editor</h3>
                <ul>
                  <li>
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Visual Studio Code</span>
                    </a>
                    <ul>
                      <li>
                        <span>plugin</span> <span>Simple React Snippets</span>
                      </li>
                      <li>
                        <span>plugin</span> <span>Live Sass Compiler</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://sourcefoundry.org/hack/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Hack</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.jetbrains.com/ko-kr/idea/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>IntelliJ IDEA</span>
                    </a>
                    <span> - 현재 회사에서 사용하는</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h3>Desktop Apps</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/chrome/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://git-scm.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Git bash
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
