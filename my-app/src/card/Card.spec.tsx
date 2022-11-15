import { fireEvent, render, screen} from "@testing-library/react";
import Card from "./Card"
import CardProps from "./Carde.type";


describe('Card', ()=> {
    const cardProps: CardProps = {
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, corrupti facilis sed recusandae id a nam, laborum officiis odio praesentium facere, eius repellat! Explicabo nostrum, praesentium aspernatur fuga nobis quos?',
        title : "maCarte",
        footer: "monFooter",
        buttonLabel:"monButton",
        // buttonAction:"button"
    } 
    it('doit fournir un render', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const card = screen.getByText("maCarte");
        expect(card).toBeInTheDocument();
    });

    it('doit afficher le titre dans une section avec classe card-title', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const card = document.getElementsByClassName("card-title")[0];
        expect(card.textContent).toBe(cardProps.title);
    });

    it('doit afficher le body dans une section avec classe card-body', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const element = document.getElementsByClassName("card-body")[0];
        expect(element.textContent).toBe(cardProps.body);
    });

    it('doit afficher le footer dans une section avec classe card-footer quand j\'ai une props footer', () => {
        render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer} />)
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element.textContent).toBe(cardProps.footer);
    });

    it('ne doit pas afficher le footer  je n\'ai pas une props footer', () => {
        render(<Card title={cardProps.title} body={cardProps.body}  />)
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element).toBeUndefined();
    });

    it('doit avoir un bouton avec label quand je mets la props', () => {
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} />)
        const element = screen.getByText(cardProps.buttonLabel as string);
        expect(element).toBeInTheDocument();
    });

    it('doit pas afficher le  bouton avec label quand je n\'ai mets la props', () => {
        render(<Card title={cardProps.title} body={cardProps.body}  />)
        const element = document.getElementsByClassName("bouton")[0];
        expect(element).toBeUndefined();
    });

    it('doit appeler l\'action du bouton quand on click sur le bouton', () => {
       
        //fonction espion
        const handleClick = jest.fn();
       
        render(<Card title={cardProps.title} body={cardProps.body} buttonAction={handleClick} buttonLabel={cardProps.buttonLabel} />)
        const button = document.querySelector("button");
        //cliquer sur le bouton
        fireEvent.click(button!);

        //verifier que la fonction declencher par le clisk est appelée
        expect(handleClick).toHaveBeenCalled();
    });
})
