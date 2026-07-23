'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    storeName: '',
    budget: '120만원 (30명 최소)',
    hasExperience: 'O',
    agreePrivacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [showPrivacyDetail, setShowPrivacyDetail] = useState(false);
  
  // Toast Notification State
  const [toastData, setToastData] = useState({ visible: false, name: '' });

  useEffect(() => {
    // 7초마다 토스트 띄우기 (3초 유지)
    const interval = setInterval(() => {
      const lastNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '전', '홍'];
      const firstNames = ['진', '수', '영', '현', '민', '훈', '희', '성', '우', '준', '연', '지', '은', '환', '철', '호', '원', '경', '빈'];
      const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomName = `${randomLast}O${randomFirst}`;
      
      setToastData({ visible: true, name: randomName });
      
      // 3초 후 토스트 숨기기
      setTimeout(() => {
        setToastData((prev) => ({ ...prev, visible: false }));
      }, 3000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 500px
      if (window.scrollY > 500) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.storeName) {
      alert('필수 입력 항목을 모두 작성해주세요.');
      return;
    }
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('consult-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      {/* Toast Notification */}
      <div className={`${styles.toastNotification} ${toastData.visible ? styles.toastVisible : ''}`}>
        🔔 <span>{toastData.name} 대표님</span> 상담신청이 완료되었습니다.
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/hero_bg.png" 
            alt="Hero Background" 
            fill 
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay}></div>
        </div>
        
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={`${styles.badge} animate-fade-in`}>
            🚨 무비자 특수 긴급 모집 (이달 TO 단 3자리)
          </div>
          <h1 className={`${styles.title} animate-fade-in delay-100`}>
            중국 자본 쓸어모을 <br />
            <span className={styles.titleHighlight}>대표님 구합니다</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-200`}>
            무비자 입국 특수로 중국인 관광객이 몰려오고 있습니다.<br />
            아는 사람만 이미 중국인을 대상으로 폭발적인 매출을 기록 중입니다.<br />
            경쟁 매장보다 한발 앞서 유커(游客)들의 발길을 사로잡으세요!
          </p>
          <div className={`${styles.ctaGroup} animate-fade-in delay-300`}>
            <button className={`${styles.primaryBtn} ${styles.pulseBtn}`} onClick={scrollToForm}>
              무료 진단 & 상담 신청하기 →
            </button>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className={`${styles.section} ${styles.painPointSection}`}>
        <div className={styles.container}>
          <div className={styles.painPointGrid}>
            <div className={styles.painBox}>
              <h2 className={styles.painTitle}>혹시 이러고 계신가요?</h2>
              <ul className={styles.painList}>
                <li>내국인 대상 인스타/블로그만 주구장창 운영</li>
                <li>바로 옆 경쟁 매장은 중국인으로 꽉 차는데 우리 매장만 텅텅</li>
                <li>중국 관광객이 오긴 하는데, 어떻게 유입시킬지 막막함</li>
              </ul>
            </div>
            <div className={styles.solutionBox}>
              <div className={styles.solutionBadge}>SOLUTION</div>
              <h2 className={styles.solutionTitle}>중국인 관광객 90% 이상이<br/>'샤오홍슈'만 보고 찾아옵니다.</h2>
              <p style={{ color: '#dcdcdc', fontSize: '1.1rem', lineHeight: '1.6' }}>
                한국 방문 전, 샤오홍슈에서 맛집과 핫플을 검색하여 저장하는 것이 중국 MZ세대의 필수 여행 코스입니다. 샤오홍슈를 장악하지 못하면 넘쳐나는 중국 자본을 그대로 놓치게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Reviews) Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            샤오홍슈 상위노출, <span>매출이 증명합니다</span>
          </h2>
          
          {/* Graphs Section */}
          <div className={styles.graphGrid}>
            <div className={styles.graphCard}>
              <div className={styles.graphTitle}>
                강남 A 피부과 
                <span className={styles.graphBadge}>매출 +140%</span>
              </div>
              <p className={styles.graphDesc}>(월 평균 중국인 매출)</p>
              
              <div className={styles.graphRow}>
                <div className={styles.graphLabel}>도입 전</div>
                <div className={styles.graphBarWrapper}>
                  <div className={styles.graphBarBefore} style={{ width: '35%' }}>5,000만</div>
                </div>
              </div>
              <div className={styles.graphRow}>
                <div className={styles.graphLabel}>진행 3개월 후</div>
                <div className={styles.graphBarWrapper}>
                  <div className={styles.graphBarAfter} style={{ width: '85%' }}>1억 2,000만 🚀</div>
                </div>
              </div>
            </div>

            <div className={styles.graphCard}>
              <div className={styles.graphTitle}>
                홍대 B 디저트 카페
                <span className={styles.graphBadge}>방문객 +700%</span>
              </div>
              <p className={styles.graphDesc}>(일 평균 외국인 방문객 수)</p>
              
              <div className={styles.graphRow}>
                <div className={styles.graphLabel}>도입 전</div>
                <div className={styles.graphBarWrapper}>
                  <div className={styles.graphBarBefore} style={{ width: '15%' }}>15명</div>
                </div>
              </div>
              <div className={styles.graphRow}>
                <div className={styles.graphLabel}>진행 1개월 후</div>
                <div className={styles.graphBarWrapper}>
                  <div className={styles.graphBarAfter} style={{ width: '90%' }}>120명 🚀</div>
                </div>
              </div>
            </div>

            <div className={styles.graphCard}>
              <div className={styles.graphTitle}>
                명동 C 고깃집
                <span className={styles.graphBadge}>매출 +137%</span>
              </div>
              <p className={styles.graphDesc}>(월 평균 전체 매출)</p>
              
              <div className={styles.graphRow}>
                <div className={styles.graphLabel}>도입 전</div>
                <div className={styles.graphBarWrapper}>
                  <div className={styles.graphBarBefore} style={{ width: '40%' }}>4,000만</div>
                </div>
              </div>
              <div className={styles.graphRow}>
                <div className={styles.graphLabel}>진행 2개월 후</div>
                <div className={styles.graphBarWrapper}>
                  <div className={styles.graphBarAfter} style={{ width: '95%' }}>9,500만 🚀</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.reviewGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewStars}>★★★★★</div>
              <div className={styles.reviewQuote}>"체험단 한 달 만에 매출 3천만 원 올랐습니다."</div>
              <p className={styles.reviewText}>
                반신반의하며 시작했는데, 샤오홍슈에 노출되자마자 캐리어 끄는 손님들이 줄을 서기 시작했어요. 진작 할 걸 그랬습니다.
              </p>
              <div className={styles.reviewAuthor}>
                <div className={styles.authorAvatar}>김</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>김OO 대표님</span>
                  <span className={styles.authorStore}>명동 K-BBQ 고깃집</span>
                </div>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewStars}>★★★★★</div>
              <div className={styles.reviewQuote}>"객단가 높은 의료 관광객 유치 대성공!"</div>
              <p className={styles.reviewText}>
                중국인 환자 유치를 고민하다 샤오홍슈 마케팅을 맡겼습니다. 정확한 타겟팅 덕분에 시술 문의가 폭주해서 행복한 비명을 지르고 있습니다.
              </p>
              <div className={styles.reviewAuthor}>
                <div className={styles.authorAvatar}>이</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>이OO 원장님</span>
                  <span className={styles.authorStore}>강남 피부과 의원</span>
                </div>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewStars}>★★★★★</div>
              <div className={styles.reviewQuote}>"중국인 알바생까지 새로 뽑았어요."</div>
              <p className={styles.reviewText}>
                메뉴가 중국어로 번역된 리뷰들이 깔리니까, 말 안 통해도 사진만 보고 주문하는 중국 손님들이 매일매일 찾아옵니다.
              </p>
              <div className={styles.reviewAuthor}>
                <div className={styles.authorAvatar}>박</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>박OO 대표님</span>
                  <span className={styles.authorStore}>홍대 핫플 디저트 카페</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={styles.section} style={{ background: 'rgba(15, 15, 15, 0.4)' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span>K-소비</span>의 중심에 서세요
          </h2>
          <div className={styles.grid}>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🍽️</div>
              <h3 className={styles.cardTitle}>F&B (식당, 카페)</h3>
              <p className={styles.cardText}>
                현지인 추천 필수 방문 맛집으로 소문나 중국 관광객들의 대기 줄이 길어집니다.
              </p>
            </div>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>💄</div>
              <h3 className={styles.cardTitle}>뷰티 & 에스테틱</h3>
              <p className={styles.cardText}>
                K-뷰티 관리를 체험하고 SNS 후기를 남기는 관광객 필수 방문 코스를 선점하세요.
              </p>
            </div>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🏥</div>
              <h3 className={styles.cardTitle}>피부과 & 성형외과</h3>
              <p className={styles.cardText}>
                객단가가 높은 의료 관광객 유입으로 압도적인 매출 상승 효과를 경험하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Pricing Section (Scarcity & Urgency) */}
      <section className={`${styles.section} ${styles.pricingSection}`}>
        <div className={styles.container}>
          <div className={`${styles.priceCard} glass-panel`}>
            <div className={styles.urgencyBadge}>🔥 이달의 맞춤 컨설팅 TO 단 3자리 남음</div>
            <h2 className={styles.cardTitle} style={{ fontSize: '2.2rem' }}>샤오홍슈 체험단 마케팅</h2>
            <div className={styles.priceAmount}>
              40,000<span>원 / 1인</span>
            </div>
            <p className={styles.cardText} style={{ marginBottom: '1.5rem' }}>* 부가세 별도</p>
            
            <div className={styles.agencyHighlight}>
              <h4>💡 실행사 직접 운영의 압도적 효율</h4>
              <p>중간 대행사를 거치지 않는 <span>마케팅 실행사 직영</span>으로 거품을 뺐습니다. 비싼 타 업체와 동일한 예산으로 <span>훨씬 더 많은 체험단(물량)</span>을 압도적으로 동원하여 상위 노출 확률을 극대화할 수 있습니다.</p>
            </div>

            <ul className={styles.priceDetails}>
              <li><span className={styles.checkIcon}>✓</span> 최소 30명부터 부담 없이 진행 가능!</li>
              <li><span className={styles.checkIcon}>✓</span> 주요 거점 지역: 서울, 부산, 제주 및 관광객 유입 지역</li>
              <li><span className={styles.checkIcon}>✓</span> 샤오홍슈 알고리즘 맞춤 태그 & 상위 노출 최적화</li>
              <li><span className={styles.checkIcon}>✓</span> 무료 매장 진단 및 1:1 맞춤형 세일즈 전략 제공</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="consult-form" className={`${styles.section} ${styles.formSection}`}>
        <div className={styles.container}>
          <div className={`${styles.formCard} glass-panel`}>
            <h2 className={`${styles.sectionTitle} ${styles.gold}`} style={{ marginBottom: '1rem', fontSize: '2.4rem' }}>
              우리 매장 중국인 유입 가능성<br/>
              <span>무료 진단받기</span>
            </h2>
            <p className={styles.cardText} style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              지금 신청하시면 전담 마케터가 상권을 분석하여<br/>샤오홍슈 상위노출 시크릿 전략을 제안해 드립니다.
            </p>

            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>🎉</div>
                <h3 className={styles.successTitle}>무료 진단 신청이 완료되었습니다!</h3>
                <p className={styles.successText}>
                  순차적으로 배정된 전담 마케터가 상권 분석 후 24시간 이내에 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>이름 <span>*</span></label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>연락처 <span>*</span></label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>매장명 <span>*</span></label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="예: 홍대 K-뷰티 에스테틱 / 강남 본점"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    required
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>예상 예산 <span>*</span></label>
                  <select
                    className={styles.select}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="120만원 (30명 최소)">120만원 (최소 30명 진행)</option>
                    <option value="200만원 (50명 진행)">200만원 (50명 진행)</option>
                    <option value="400만원 (100명 대규모)">400만원 (100명 대규모 진행)</option>
                    <option value="협의 필요">직접 상담 후 결정 (무료 진단부터)</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>샤오홍슈 체험단 진행 경험 여부 <span>*</span></label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        value="O"
                        checked={formData.hasExperience === 'O'}
                        onChange={(e) => setFormData({ ...formData, hasExperience: e.target.value })}
                      />
                      진행해본 적 있음 (O)
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        value="X"
                        checked={formData.hasExperience === 'X'}
                        onChange={(e) => setFormData({ ...formData, hasExperience: e.target.value })}
                      />
                      처음입니다 (X)
                    </label>
                  </div>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <div className={styles.privacyContainer}>
                    <div className={styles.privacyHeader}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={formData.agreePrivacy}
                          onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                        />
                        (필수) 개인정보 수집 및 이용 동의
                      </label>
                      <button 
                        type="button" 
                        className={styles.privacyToggleBtn}
                        onClick={() => setShowPrivacyDetail(!showPrivacyDetail)}
                      >
                        {showPrivacyDetail ? '접기' : '자세히보기'}
                      </button>
                    </div>
                    {showPrivacyDetail && (
                      <div className={styles.privacyText}>
                        [개인정보 수집 및 이용 안내]<br/>
                        1. 수집 항목: 이름, 연락처, 매장명, 예산, 경험여부<br/>
                        2. 수집 및 이용 목적: 맞춤 상담 진행 및 마케팅 안내<br/>
                        3. 보유 및 이용 기간: 상담 목적 달성 후 6개월 내 파기<br/>
                        ※ 동의를 거부할 권리가 있으나, 미동의 시 상담 서비스 이용이 제한됩니다.
                      </div>
                    )}
                  </div>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ marginTop: '1.5rem' }}>
                  <button type="submit" className={`${styles.primaryBtn} ${styles.pulseBtn}`} style={{ width: '100%' }}>
                    무료 상권 분석 및 상담 신청하기
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>상호: 원피드마케팅 | 대표: 권용진 | 사업자등록번호: 2343901465 | 이메일: stu01dio@gmail.com</p>
        <p style={{ marginTop: '0.8rem' }}>© 2026 원피드마케팅. All rights reserved.</p>
      </footer>

      {/* Sticky Bottom Bar */}
      <div className={`${styles.stickyBar} ${showSticky ? styles.visible : ''}`}>
        <div className={styles.stickyText}>
          선착순 마감 임박! 우리 매장 <span>무료 진단받기</span>
        </div>
        <button className={styles.primaryBtn} style={{ padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '30px' }} onClick={scrollToForm}>
          지금 신청하기
        </button>
      </div>
    </main>
  );
}
