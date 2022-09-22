import CustomerCard from '../../../components/CustomerCard';
import styles from './styles/customers-section.module.scss';
import { Carousel } from 'react-responsive-carousel';
const comments = [
  {
    id: 1,
    comment:
      'Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.',
  },
  {
    id: 2,
    comment:
      'Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria. Digift stood out from the crowd with an impressive team and even more impressive mission ',
  },
  {
    id: 3,
    comment:
      'Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.',
  },
];

const label = {
  leftArrow: 'previous slide / item',
  rightArrow: 'next slide / item',
  item: 'slide item',
};
const CustomerSection = () => {
  return (
    <section className={styles.customers}>
      <h3>“Hear what happy customers are saying about Digift”</h3>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2000}
        interval={3000}
        ariaLabel={label}
        autoFocus={true}
        infiniteLoop={true}
        showStatus={true}
      >
        {comments.map((item, index) => (
          <CustomerCard key={index} comment={item.comment} />
        ))}
        </Carousel>
    </section>
  );
};

export default CustomerSection;
