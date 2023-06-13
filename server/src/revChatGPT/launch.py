import aiohttp
from aiohttp import web
from V3 import getRetMsg
from loguru import logger
import json
import asyncio
import traceback

async def getResponse(request):
    try:
        ws = web.WebSocketResponse()
        await ws.prepare(request)
    except Exception as e:
        logger.error(f"Failed to prepare WebSocket connection: {e}")
        return None
    logger.info(f"New WebSocket connection: {id(ws)}")
    try:
        async for msg in ws:
            if msg.type == aiohttp.WSMsgType.TEXT:
                req = json.loads(msg.data)
                gen = await getRetMsg(req)
                print(type(gen))
                async for item in gen:
                    await ws.send_str(item)
                await ws.send_str("@@@end@@@")
                logger.info(f"answered: {req}")

            elif msg.type == aiohttp.WSMsgType.ERROR:
                logger.error('failed to getResponse %s' % ws.exception())
        return ws
    except:
        logger.error(f'an error occurred in: {traceback.format_exc()}')
        await ws.close()
        return None


async def main(request):
    await asyncio.create_task(getResponse(request))

app = web.Application()
app.add_routes([web.get('/prompt', main)])
web.run_app(app, port=8000)
