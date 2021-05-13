import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const { Dragger } = Upload;
const UploadPage = () => {

    const props = {
        name: 'file',
        multiple: false,
        action: '/',
        method:"post",
        onChange( info ) {

            console.log(info)
            const { status } = info.file;
            if ( status !== 'uploading' ) {
                console.log('uploading', info.file, info.fileList );
            }
            if ( status === 'done' ) {
                message.success( `done ${info.file.name} file uploaded successfully.` );
            } else if ( status === 'error' ) {
                message.error( `error ${info.file.name} file upload failed.` );
            }
        },
    };

    return (
        <>
            <Row style={{
                marginTop: "2rem",
                textAlign: 'center',
                fontWeight: 'bold'
            }}>

                <Col span={8} offset={8}>
                    <h2>Project StepOne</h2>
                </Col>
            </Row>

            <Row style={{ marginTop: "2rem" }}>
                <Col span={8} offset={8}>
                    <div>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger>
                    </div>

                </Col>
            </Row>
        </>
    );
};

export default UploadPage;
