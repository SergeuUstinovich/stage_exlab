import InfinitiStr from '../../components/InfiniteStr/InfinitiStr';
import SlideAdvertising from '../../components/SliderAdvertising/SlideAdvertising';
import SliderComments from '../../components/SliderComments/SliderComments';
import slideAdv1 from '../../assets/img/Swiper-slide1.jpg';
import slideAdv2 from '../../assets/img/Swiper-slide2.jpg';
import slideAdv3 from '../../assets/img/Swiper-slide3.jpg';
import imgComm1 from '../../assets/img/comment_avatar1.png';
import imgComm2 from '../../assets/img/comment_avatar2.png';
import imgComm3 from '../../assets/img/comment_avatar3.png';
import imgComm4 from '../../assets/img/comment_avatar4.png';
import Partners from '../../components/Partners/Partners';
import Filter from '../../components/Filter/Filter';

const SliderAdvertis = [
  {
    id: '1',
    src: slideAdv1,
    title: '',
    colorBg: '#4F2A6E',
    text: 'Только по четвергам романтический ужин в ресторане Радуга со скидкой 20%'
  },
  {
    id: '2',
    src: slideAdv2,
    title: '',
    colorBg: '#245083',
    text: 'Акции на проведение гендер-пати по средам и четвергам'
  },
  {
    id: '3',
    src: slideAdv3,
    title: '',
    colorBg: '#352820',
    text: 'Специальные предложения для зарегистрированных пользователей'
  }
];

const arrComm = [
  {
    name: 'Роман',
    time: '1 год',
    raiting: 4,
    year: 'апрель 2024',
    textComm:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repellat animi omnis culpa sit mollitia quaerat eaque error! Est doloribus modi praesentium vel, molestiae, quod inventore placeat ea omnis doloremque harum culpa quasi laudantium recusandae dolor voluptatum, tenetur beatae exercitationem similique numquam nobis ipsam suscipit accusantium. Tempore cumque exercitationem porro consectetur culpa atque sunt, quaerat, sint, hic nemo quidem dolorem explicabo natus quibusdam delectus necessitatibus voluptate. Sint quam eaque quisquam sed placeat tempore dolorem iste odio nulla, natus illo, iusto labore ratione aspernatur incidunt eius. Quibusdam, iste! Necessitatibus odit repellendus distinctio provident aut, numquam ut, eius consectetur accusantium aliquam illo.',
    img: imgComm1
  },
  {
    name: 'Валентина',
    time: '3 месяца',
    raiting: 4,
    year: 'июнь 2024',
    textComm:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repellat animi omnis culpa sit mollitia quaerat eaque error! Est doloribus modi praesentium vel, molestiae, quod inventore placeat ea omnis doloremque harum culpa quasi laudantium recusandae dolor voluptatum, tenetur beatae exercitationem similique numquam nobis ipsam suscipit accusantium. Tempore cumque exercitationem porro consectetur culpa atque sunt, quaerat, sint, hic nemo quidem dolorem explicabo natus quibusdam delectus necessitatibus voluptate. Sint quam eaque quisquam sed placeat tempore dolorem iste odio nulla, natus illo, iusto labore ratione aspernatur incidunt eius. Quibusdam, iste! Necessitatibus odit repellendus distinctio provident aut, numquam ut, eius consectetur accusantium aliquam illo.',
    img: imgComm2
  },
  {
    name: 'Ксения',
    time: '6 месяцев',
    raiting: 5,
    year: 'январь 2024',
    textComm:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repellat animi omnis culpa sit mollitia quaerat eaque error! Est doloribus modi praesentium vel, molestiae, quod inventore placeat ea omnis doloremque harum culpa quasi laudantium recusandae dolor voluptatum, tenetur beatae exercitationem similique numquam nobis ipsam suscipit accusantium. Tempore cumque exercitationem porro consectetur culpa atque sunt, quaerat, sint, hic nemo quidem dolorem explicabo natus quibusdam delectus necessitatibus voluptate. Sint quam eaque quisquam sed placeat tempore dolorem iste odio nulla, natus illo, iusto labore ratione aspernatur incidunt eius. Quibusdam, iste! Necessitatibus odit repellendus distinctio provident aut, numquam ut, eius consectetur accusantium aliquam illo.',
    img: imgComm3
  },
  {
    name: 'Василий',
    time: '2 годa',
    raiting: 4,
    year: 'сентябрь 2023',
    textComm:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repellat animi omnis culpa sit mollitia quaerat eaque error! Est doloribus modi praesentium vel, molestiae, quod inventore placeat ea omnis doloremque harum culpa quasi laudantium recusandae dolor voluptatum, tenetur beatae exercitationem similique numquam nobis ipsam suscipit accusantium. Tempore cumque exercitationem porro consectetur culpa atque sunt, quaerat, sint, hic nemo quidem dolorem explicabo natus quibusdam delectus necessitatibus voluptate. Sint quam eaque quisquam sed placeat tempore dolorem iste odio nulla, natus illo, iusto labore ratione aspernatur incidunt eius. Quibusdam, iste! Necessitatibus odit repellendus distinctio provident aut, numquam ut, eius consectetur accusantium aliquam illo.',
    img: imgComm4
  }
];

function MainPage() {
  return (
    <>
      <Filter />
      <SlideAdvertising slider={SliderAdvertis} />
      <Partners />
      <InfinitiStr />
      <SliderComments slider={arrComm} />
    </>
  );
}

export default MainPage;
