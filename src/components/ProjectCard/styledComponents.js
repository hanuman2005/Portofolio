import styled from "styled-components";

export const CardContainer = styled.div.attrs({
  className: "w-full h-[400px]",
})`
  perspective: 1500px;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  cursor: pointer;

  ${CardContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div.attrs({
  className:
    "absolute w-full h-full rounded-xl bg-cover bg-center p-4 flex flex-col justify-end text-white shadow-lg",
})`
  backface-visibility: hidden;
`;

export const CardBack = styled.div.attrs({
  className:
    "absolute w-full h-full rounded-xl bg-slate-800 text-white p-5 flex flex-col justify-between shadow-xl",
})`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const Title = styled.h4.attrs({
  className: "text-lg font-semibold mb-1",
})``;

export const DomainBadge = styled.span.attrs({
  className:
    "inline-block mt-1 px-3 py-1 text-xs font-medium bg-teal-500 text-white rounded-full",
})``;

export const Description = styled.p.attrs({
  className: "text-sm text-slate-300 flex-grow mt-2",
})``;

export const TechList = styled.div.attrs({
  className: "flex flex-wrap gap-2 mt-3",
})`
  span {
    background-color: #e0f2fe;
    color: #0c4a6e;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    border-radius: 9999px;
    font-weight: 500;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      background-color: #bae6fd;
    }
  }
`;

export const ButtonGroup = styled.div.attrs({
  className: "flex gap-3 mt-4",
})``;

export const ActionButton = styled.a.attrs({
  className:
    "flex-1 text-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md text-sm font-medium transition-colors duration-300",
})``;
