import React from 'react';
import './LectureGoalList.css'

const LectureGoalList = () => {
  return (
    <div className="LectureGoalList" style={ {backgroundColor: '#ccc'} }>
      <h2>강의목표</h2>
      <ul>
        <li><input type="checkbox"/> React 개발에 필요한 환경을 구축한다.</li>
        <li><input type="checkbox" checked/> 새로운 자바스크립트 문법을 익힌다.</li>
        <li><input type="checkbox"/> 개발 편의를 위한 IntelliJ 환경을 만든다.</li>
        <li><input type="checkbox"/> 기본적인 Git 사용법을 익힌다.</li>
        <li><input type="checkbox"/> PR 코드 리뷰를 응용한 개발 프로세스를 익힌다</li>
        <li><input type="checkbox"/> React 로 간단한 노트앱을 만들어본다.</li>
      </ul>
    </div>
  );
};

export function x() {
  return 1
}

export default LectureGoalList;
