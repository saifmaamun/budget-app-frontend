import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BudgetCard from '../BudgetCard/BudgetCard';

const BudgetCards = () => {
    
    const budget1 = {
        id:1,
        name: 'Entertainment', 
        cost: 200,
        total: 1000,
        status: "gray"
    }
    const budget2 = {
        id: 2,
        name: 'Entertainment', 
        cost: 600,
        total: 1000,
        status: "gray"
    }
    const budget3 = {
        id: 3,
        name: 'Entertainment', 
        cost: 800,
        total: 1000,
        status: "gray"
    }
    const budget4 = {
        id: 4,
        name: 'Entertainment', 
        cost: 100,
        total: 1000,
        status: "gray"
    }
    const budget5 = {
        id: 5,
        name: 'Entertainment', 
        cost: 1200,
        total: 1000,
        status: "gray"
    }
    const budget6 = {
        id: 6,
        name: 'Entertainment', 
        cost: 0,
        total: 1000,
        status: "gray"
    }


    const budgets = [
        budget1, budget2, budget3, budget4, budget5, budget6
    ];









    return (
        <Row className="g-4" >
                {budgets.map(budget =>
            <Col sm={12} md={6} lg={4}>
                
                    <BudgetCard
                        key={budget.id}
                        budget={budget}
                    ></BudgetCard>
                

                </Col>
                )
                }
            </Row>
    );
};

export default BudgetCards;