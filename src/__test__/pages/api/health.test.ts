/**
 * @jest-environment node
 */
import hello, { Data } from 'pages/api/health';
import { NextApiResponse, NextApiRequest } from 'next';
import httpMocks from 'node-mocks-http';

describe('Test api health check', () => {
  it('should call and return correctly', async () => {
    const mockReq = httpMocks.createRequest<NextApiRequest>();
    const mockRes = httpMocks.createResponse<NextApiResponse>();
    let respondJson: Data = { name: '' };
    mockRes.json = (ret: Data) => {
      respondJson = ret;
    };
    hello(mockReq, mockRes);
    expect(mockRes.statusCode).toBe(200);
    expect(respondJson).toMatchObject({ name: 'OK' });
  });
});
