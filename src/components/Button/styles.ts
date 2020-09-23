import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  color: #f0ece2;
  border: 1px solid #333;
  border-radius: 0.5rem;
  display: flex;
  height: 5rem;
  justify-content: center;
  gap: 1rem;
  font-size: 1.8rem;
  padding: 1rem;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`
