import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSportsContext } from "./context/sports_context";
import { single_sport_url as url } from "./utils/constants";
import { formatPrice } from "./utils/helpers";
import { Loading, SportImages, Stars } from "./components";
import "./Sports-page-global.scss";
import styled from "styled-components";

const SingleSportPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_sport_loading: loading,
    single_sport_error: error,
    single_sport: sport,
    fetchSingleSport,
  } = useSportsContext();

  // Get rid of second id parameter when there is server-side filtering
  useEffect(() => {
    fetchSingleSport(`${url}`, `${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate(process.env.PUBLIC_URL + "/not-found");
      }, 100);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = sport;
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to={`${process.env.PUBLIC_URL}/sports`} className="btn">
          back to sports
        </Link>
        <div className="sport-center">
          <SportImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .sport-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .sport-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleSportPage;
