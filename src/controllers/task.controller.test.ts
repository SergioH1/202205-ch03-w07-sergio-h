/* eslint-disable no-unused-labels */
import { Request, Response } from 'express';
import { Task } from '../models/task.model';
import {
    deleteController,
    getAllController,
    getController,
    patchController,
    postController,
} from './task.controller';
describe('Given the controller functions  ', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let taskModel: Task;

    beforeEach(() => {
        req = {
            params: {
                id: '1',
            },
            body: {},
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
        taskModel: Task;
    });
    describe('When getAllController is called ', () => {
        test('Then resp.end should be called', async () => {
            await getAllController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
            expect(resp.setHeader).toHaveBeenCalled();
        });
    });
    describe('When getController is called', () => {
        test('Them resp.end should be called', async () => {
            let taskModel = new Task('', '', false);
            taskModel.find = jest.fn();
            await getController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
            expect(resp.status).toHaveBeenCalledWith(404);
        });
        // test('Them resp.end should be called', async () => {
        //     let taskModel = new Task('', '', false);
        //     let result = (taskModel.find = jest.fn().mockReturnValue({
        //         titlle: 'Terminar el challenge',
        //         responsible: 'Sergio',
        //         isCompleted: false,
        //         id: 2,
        //     }));
        //     expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
        // });
    });
    describe('When postController is called', () => {
        test('Them resp.end should be called', async () => {
            let taskModel = new Task('', '', false);
            taskModel.create = jest.fn();
            await postController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
            expect(resp.status).toHaveBeenCalledWith(201);
        });
    });

    describe('When patchController is called', () => {
        test('Them resp.end should be called', async () => {
            let taskModel = new Task('', '', false);
            taskModel.create = jest.fn();
            await patchController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
        });
    });
    describe('When deleteController is called', () => {
        test('Them resp.end should be called', async () => {
            let taskModel = new Task();
            taskModel.delete = jest.fn();
            await deleteController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
        });
    });
});
