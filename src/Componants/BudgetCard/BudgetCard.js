import React from 'react';
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const BudgetCard = ({ budget }) => {
    const { currency, progressBarVariant}=useAuth();
    const { id, name, cost, total,gray } = budget;


    // budget bg set
const classNames =[]
    if (cost> total) {
        classNames.push("bg-danger","bg-opacity-10")
    } else classNames.push("bg-light")



    return (
        <Card className={classNames.join(" ")} >
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3"  >
                    <div className="me-2"> {name }</div>
                    <div className="d-flex align-items-baseline">{currency.format(cost)} / 
                    <span className="ms-1 text-muted fs-6">{currency.format(total)}</span>
                    </div>
                </Card.Title>
                <ProgressBar
                    className="rounded-pill"
                    variant={progressBarVariant(cost, total)}
                    min={0}
                    max={total}
                    now={cost} />
                <Stack direction="horizontal" gap={3} className="mt-4">
                    <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
                    <Button variant="outline-secondary" >view Expenses</Button>
                </Stack>
            </Card.Body>
        </Card>
    );
};

export default BudgetCard;