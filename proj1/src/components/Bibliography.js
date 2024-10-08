import React from 'react';
import './Bibliography.css';

const Bibliography = ({ highlightedCitation }) => {
  const references = [
    { number: 1, text: 'Basavaraju, A., Du, J., Zhou, F., & Ji, J. (2019). A machine learning approach to road surface anomaly assessment using smartphone sensors. IEEE Sensors Journal, 20(5), 2635-2647.' },
    { number: 2, text: 'Dharneeshkar, J., Aniruthan, S. A., Karthika, R., & Parameswaran, L. (2020, February). Deep Learning based Detection of potholes in Indian roads using YOLO. In 2020 international conference on inventive computation technologies (ICICT) (pp. 381-385). IEEE.' },
    { number: 3, text: 'Wu, C., Wang, Z., Hu, S., Lepine, J., Na, X., Ainalis, D., & Stettler, M. (2020). An automated machine-learning approach for road pothole detection using smartphone sensor data. Sensors, 20(19), 5564.' },
    { number: 4, text: 'Feng, X., Xiao, L., Li, W., Pei, L., Sun, Z., Ma, Z., ... & Ju, H. (2020). Pavement crack detection and segmentation method based on improved deep learning fusion model. Mathematical Problems in Engineering, 2020(1), 8515213.' },
    { number: 5, text: 'Watanabe, T., Takahashi, H., Iwasawa, Y., Matsuo, Y., & Eguchi Yairi, I. (2019). Weakly supervised learning for evaluating road surface condition from wheelchair driving data. Information, 11(1), 2.' },
    { number: 6, text: 'Iwasawa, Y., Yairi, I. E., & Matsuo, Y. (2016). Combining human action sensing of wheelchair users and machine learning for autonomous accessibility data collection. IEICE TRANSACTIONS on Information and Systems, 99(4), 1153-1161.' },
    { number: 7, text: 'Mandal, Vishal & Uong, Lan & Adu-Gyamfi, Yaw. (2018). Automated Road Crack Detection Using Deep Convolutional Neural Networks. 5212-5215. 10.1109/BigData.2018.8622327. ' },
    { number: 8, text: 'C. Y. Koh, M. Ali and A. Hendawi, "CrackLens: Automated Sidewalk Crack Detection and Segmentation," in IEEE Transactions on Artificial Intelligence, doi: 10.1109/TAI.2024.3435608' },
    { number: 9, text: 'H. Yuan et al., "Monocular Road Planar Parallax Estimation," in IEEE Transactions on Image Processing, vol. 32, pp. 3690-3701, 2023, doi: 10.1109/TIP.2023.3289323.' },
    { number: 10, text: 'Yuhan Jiang, Sisi Han, Dapeng Li, Yong Bai, Mingzhu Wang,Automatic concrete sidewalk deficiency detection and mapping with deep learning,Expert Systems with Applications,Volume 207,2022,117980,ISSN 0957-4174, doi.org/10.1016/j.eswa.2022.117980.'},
    { number: 11, text: '2015 International Conference on Control, Automation and Information Sciences (ICCAIS) October 29-31, 2015, Changshu, China Real Time Road Edges Detection And Road Signs Recognition'},
    { number: 12, text: 'Xiangdong Wang, Yunfei Cai and Tingmin Shi, "Road edge detection based on improved RANSAC and 2D LIDAR Data," 2015 International Conference on Control, Automation and Information Sciences (ICCAIS), Changshu, 2015, pp. 191-196, doi: 10.1109/ICCAIS.2015.7338660.'}
  ];

  return (
    <div className="bibliography">
      <h2>Bibliography</h2>
      <ul>
        {references.map((ref) => (
          <li
            key={ref.number}
            className={`bibliography-item ${highlightedCitation === ref.number ? 'highlighted' : ''}`}
          >
            [{ref.number}] {ref.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bibliography;